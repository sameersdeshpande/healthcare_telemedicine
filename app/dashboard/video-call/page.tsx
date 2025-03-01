"use client"

import { useEffect, useRef, useState } from "react"
import { Mic, MicOff, Monitor, MoreVertical, Phone, Video, VideoOff } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function VideoCallPage() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isCallActive, setIsCallActive] = useState(true)
  const [elapsedTime, setElapsedTime] = useState(0)
  const localVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Mock video stream with a timer for elapsed time
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1)
    }, 1000)

    // Mock getting user media for the local video preview
    if (isVideoOn && localVideoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream
          }
        })
        .catch((err) => {
          console.error("Error accessing camera:", err)
        })
    }

    return () => {
      clearInterval(timer)
      // Clean up video stream
      if (localVideoRef.current && localVideoRef.current.srcObject) {
        const stream = localVideoRef.current.srcObject as MediaStream
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [isVideoOn])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleMute = () => setIsMuted(!isMuted)
  const toggleVideo = () => setIsVideoOn(!isVideoOn)
  const endCall = () => setIsCallActive(false)

  if (!isCallActive) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Call Ended</h1>
          <p className="mt-2 text-muted-foreground">Your consultation has been completed</p>
          <Button className="mt-4" onClick={() => (window.location.href = "/dashboard")}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-gray-800 rounded-full px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>{formatTime(elapsedTime)}</span>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Share screen</DropdownMenuItem>
              <DropdownMenuItem>Chat</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* Main video (doctor) */}
          <div className="w-full h-full max-w-4xl rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Doctor video feed"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-gray-900 bg-opacity-70 rounded-lg p-2">
              <Avatar className="h-10 w-10 border-2 border-primary">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Dr. Sarah Johnson</p>
                <p className="text-xs text-gray-300">Primary Care</p>
              </div>
            </div>
          </div>

          {/* Self view (patient) */}
          <div className="absolute bottom-4 right-4 w-48 h-36 rounded-lg overflow-hidden border-2 border-gray-700 bg-gray-800">
            {isVideoOn ? (
              <video ref={localVideoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <Avatar className="h-16 w-16">
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-4 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full h-12 w-12 ${isMuted ? "bg-red-500 text-white border-red-500" : "bg-gray-700"}`}
          onClick={toggleMute}
        >
          {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full h-12 w-12 ${!isVideoOn ? "bg-red-500 text-white border-red-500" : "bg-gray-700"}`}
          onClick={toggleVideo}
        >
          {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
        </Button>
        <Button variant="outline" size="icon" className="rounded-full h-12 w-12 bg-gray-700">
          <Monitor className="h-5 w-5" />
        </Button>
        <Button variant="destructive" size="icon" className="rounded-full h-12 w-12" onClick={endCall}>
          <Phone className="h-5 w-5 rotate-135" />
        </Button>
      </div>
    </div>
  )
}

