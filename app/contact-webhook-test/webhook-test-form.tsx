"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f"

export default function WebhookTestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    details?: any
  } | null>(null)
  
  const [formData, setFormData] = useState({
    name: "Test User",
    email: "test@example.com",
    phone: "0612345678",
    city: "Brunssum",
    message: "This is a test message from the webhook test page",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    try {
      const webhookData = {
        data: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          message: formData.message
        }
      }

      console.log("Sending webhook data:", webhookData)

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(webhookData)
      })

      const responseText = await response.text()
      console.log("Webhook response:", {
        status: response.status,
        statusText: response.statusText,
        body: responseText
      })

      if (response.ok) {
        setResult({
          success: true,
          message: `Webhook sent successfully! Status: ${response.status}`,
          details: {
            status: response.status,
            statusText: response.statusText,
            body: responseText
          }
        })
      } else {
        setResult({
          success: false,
          message: `Webhook failed! Status: ${response.status} - ${response.statusText}`,
          details: {
            status: response.status,
            statusText: response.statusText,
            body: responseText
          }
        })
      }
    } catch (error) {
      console.error("Webhook error:", error)
      setResult({
        success: false,
        message: `Error sending webhook: ${error instanceof Error ? error.message : "Unknown error"}`,
        details: error
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending to Webhook...
            </>
          ) : (
            "Send Test Webhook"
          )}
        </Button>
      </form>

      {result && (
        <div
          className={`p-4 rounded-lg ${
            result.success
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <p className="font-semibold">{result.message}</p>
          {result.details && (
            <details className="mt-2">
              <summary className="cursor-pointer text-sm">Technical Details</summary>
              <pre className="mt-2 text-xs overflow-auto">
                {JSON.stringify(result.details, null, 2)}
              </pre>
            </details>
          )}
        </div>
      )}

      <div className="text-sm text-gray-600 space-y-1">
        <p><strong>Webhook URL:</strong></p>
        <code className="block p-2 bg-gray-100 rounded text-xs break-all">
          {WEBHOOK_URL}
        </code>
      </div>
    </div>
  )
}