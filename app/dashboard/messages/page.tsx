"use client"

import { useState } from "react"
import { ArrowLeft, Paperclip, Search, Send, Smile } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(0)
  const [message, setMessage] = useState("")

  const conversations = [
    {
      id: 0,
      name: "Dr. Sarah Johnson",
      specialty: "Primary Care",
      lastMessage: "Your test results look good. Let's discuss them in our next appointment.",
      time: "2h ago",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
      messages: [
        {
          id: 1,
          sender: "Dr. Sarah Johnson",
          content: "Hello! I've reviewed your recent lab results and everything looks good.",
          time: "10:30 AM",
          isMe: false,
        },
        {
          id: 2,
          sender: "You",
          content: "That's great news! I was a bit worried about my cholesterol levels.",
          time: "10:32 AM",
          isMe: true,
        },
        {
          id: 3,
          sender: "Dr. Sarah Johnson",
          content:
            "Your cholesterol is within normal range. The lifestyle changes you've made are clearly working. Keep up with the healthy diet and regular exercise.",
          time: "10:35 AM",
          isMe: false,
        },
        {
          id: 4,
          sender: "You",
          content: "Thank you! When should I schedule my next check-up?",
          time: "10:37 AM",
          isMe: true,
        },
        {
          id: 5,
          sender: "Dr. Sarah Johnson",
          content: "Let's plan for another check-up in 6 months. You can schedule it through the appointments section.",
          time: "10:40 AM",
          isMe: false,
        },
      ],
    },
    {
      id: 1,
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      lastMessage: "Please complete the pre-appointment questionnaire before our session tomorrow.",
      time: "Yesterday",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
      messages: [
        {
          id: 1,
          sender: "Dr. Michael Chen",
          content: "Hi there! Just a reminder about our appointment tomorrow at 10:30 AM.",
          time: "2:15 PM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Dr. Michael Chen",
          content: "Please complete the pre-appointment questionnaire I sent to your email.",
          time: "2:16 PM",
          isMe: false,
        },
        {
          id: 3,
          sender: "You",
          content: "Thanks for the reminder. I'll complete it tonight.",
          time: "3:00 PM",
          isMe: true,
        },
      ],
    },
    {
      id: 2,
      name: "Dr. Emily Rodriguez",
      specialty: "Cardiology",
      lastMessage: "Your heart rate readings from your wearable device look stable.",
      time: "Feb 20",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
      messages: [],
    },
  ]

  const handleSendMessage = () => {
    if (message.trim() === "") return
    // In a real app, you would send the message to the backend
    setMessage("")
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col md:flex-row">
      <div
        className={`border-r w-full md:w-80 flex-shrink-0 ${selectedConversation !== null ? "hidden md:block" : ""}`}
      >
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Messages</h1>
          <div className="relative mt-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search messages..." className="pl-8" />
          </div>
        </div>
        <div className="overflow-auto h-[calc(100vh-12rem)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted ${
                selectedConversation === conversation.id ? "bg-muted" : ""
              }`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={conversation.avatar} alt={conversation.name} />
                <AvatarFallback>
                  {conversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium truncate">{conversation.name}</h3>
                  <p className="text-xs text-muted-foreground">{conversation.time}</p>
                </div>
                <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.unread && <div className="w-2 h-2 bg-primary rounded-full"></div>}
            </div>
          ))}
        </div>
      </div>

      {selectedConversation !== null ? (
        <div className="flex-1 flex flex-col h-full">
          <div className="p-4 border-b flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSelectedConversation(null)}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={conversations[selectedConversation].avatar}
                alt={conversations[selectedConversation].name}
              />
              <AvatarFallback>
                {conversations[selectedConversation].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{conversations[selectedConversation].name}</h3>
              <p className="text-sm text-muted-foreground">{conversations[selectedConversation].specialty}</p>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-4 space-y-4">
            {conversations[selectedConversation].messages.length > 0 ? (
              conversations[selectedConversation].messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-muted-foreground">No messages yet. Start a conversation!</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage()
                }}
              />
              <Button variant="ghost" size="icon">
                <Smile className="h-5 w-5" />
              </Button>
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Select a conversation</h2>
            <p className="text-muted-foreground mt-1">Choose a healthcare provider to message</p>
          </div>
        </div>
      )}
    </div>
  )
}

