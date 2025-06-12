"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        })
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        })
      } else {
        setStatus("error")
        toast({
          title: "Error!",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      toast({
        title: "Error!",
        description: "Network error. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="bg-gray-100 border-none p-4"
          required
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="bg-gray-100 border-none p-4"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-100 border-none p-4"
          required
        />
        <Input
          placeholder="How can we help you? (Subject)"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-gray-100 border-none p-4"
          required
        />
      </div>
      <Textarea
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="bg-gray-100 border-none p-4 min-h-[120px]"
        required
      />
      <Button
        type="submit"
        className="bg-primary-green hover:bg-primary-green/90 text-white px-6 py-2 rounded-md text-base font-semibold w-fit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Now"}
      </Button>
    </form>
  )
}
