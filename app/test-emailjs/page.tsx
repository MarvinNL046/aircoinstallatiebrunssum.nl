"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"

export default function TestEmailJS() {
  const [status, setStatus] = useState<string>("Not initialized")
  const [error, setError] = useState<string>("")

  useEffect(() => {
    // Initialize EmailJS
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
      setStatus("EmailJS initialized with key: " + publicKey)
    } else {
      setStatus("No public key found")
    }
  }, [])

  const testEmail = async () => {
    setStatus("Sending test email...")
    setError("")

    try {
      const templateParams = {
        from_name: "Test User",
        from_email: "test@example.com",
        phone: "0612345678",
        postcode: "1234AB",
        message: "This is a test message",
        to_name: "StayCool Airco",
      }

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      )

      setStatus(`Success! Status: ${response.status}, Text: ${response.text}`)
    } catch (err: any) {
      setError(`Error: ${err.status} - ${err.text || err.message}`)
      console.error("EmailJS Error:", err)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">EmailJS Test Page</h1>
      
      <div className="space-y-4 mb-6">
        <div>
          <strong>Service ID:</strong> {process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "Not set"}
        </div>
        <div>
          <strong>Template ID:</strong> {process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "Not set"}
        </div>
        <div>
          <strong>Public Key:</strong> {process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Not set"}
        </div>
        <div>
          <strong>Status:</strong> <span className="text-blue-600">{status}</span>
        </div>
        {error && (
          <div>
            <strong>Error:</strong> <span className="text-red-600">{error}</span>
          </div>
        )}
      </div>

      <Button onClick={testEmail} className="bg-[#F97316] hover:bg-[#EA580C]">
        Send Test Email
      </Button>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="font-bold mb-2">Troubleshooting:</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Go to <a href="https://dashboard.emailjs.com" target="_blank" className="text-blue-600 underline">EmailJS Dashboard</a></li>
          <li>Verify your account is active</li>
          <li>Check that the service ID matches what's shown above</li>
          <li>Check that the template ID matches what's shown above</li>
          <li>In Account → API Keys, verify the public key matches</li>
          <li>Make sure the template has the correct variables: from_name, from_email, phone, postcode, message</li>
        </ol>
      </div>
    </div>
  )
}