import { Metadata } from "next"
import WebhookTestForm from "./webhook-test-form"

export const metadata: Metadata = {
  title: "Webhook Test - StayCool Airco",
  description: "Test page for webhook integration",
  robots: "noindex, nofollow", // Prevent search engines from indexing this test page
}

export default function WebhookTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Webhook Test Page
          </h1>
          <p className="text-gray-600 mb-6">
            This form only sends data to the GoHighLevel webhook (not EmailJS) for testing purposes.
          </p>
          <WebhookTestForm />
        </div>
      </div>
    </div>
  )
}