"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { sendEmail } from "@/lib/emailjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { ArrowRight, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters zijn"),
  phone: z.string().min(10, "Voer een geldig telefoonnummer in"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  postcode: z.string().regex(/^[1-9][0-9]{3}\s?[A-Z]{2}$/i, "Voer een geldige postcode in"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function HeroContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted with data:", data)
    setIsSubmitting(true)
    
    try {
      // Use the enhanced sendEmail function with dual submission
      await sendEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: `Postcode: ${data.postcode}\n\n${data.message || "Geen bericht"}`,
        city: "Brunssum" // You can extract city from postcode if needed
      })

      toast.success("Offerte aanvraag verstuurd! We nemen binnen 2 uur contact met u op.")

      reset()
      
      // Google Analytics event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          currency: "EUR",
          value: 100,
          event_label: "hero_contact_form",
        })
      }

      // Redirect to thank you page after 1.5 seconds
      setTimeout(() => {
        router.push('/bedankt')
      }, 1500)
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Er ging iets mis. Probeer het later opnieuw of bel ons direct op 046 202 1430.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Naam*</Label>
          <Input
            id="name"
            placeholder="Uw naam"
            {...register("name")}
            className={`border ${
              errors.name ? "border-red-500" : "border-[#D1D5DB]"
            } rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-all duration-200`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Telefoon*</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="06-12345678"
            {...register("phone")}
            className={`border ${
              errors.phone ? "border-red-500" : "border-[#D1D5DB]"
            } rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-all duration-200`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="email">E-mail*</Label>
        <Input
          id="email"
          type="email"
          placeholder="uw@email.nl"
          {...register("email")}
          className={`border ${
            errors.email ? "border-red-500" : "border-[#D1D5DB]"
          } rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-all duration-200`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="postcode">Postcode*</Label>
        <Input
          id="postcode"
          placeholder="1234 AB"
          {...register("postcode")}
          className={`border ${
            errors.postcode ? "border-red-500" : "border-[#D1D5DB]"
          } rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-all duration-200`}
        />
        {errors.postcode && (
          <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Bericht (optioneel)</Label>
        <Textarea
          id="message"
          placeholder="Vertel ons meer over uw wensen..."
          rows={3}
          {...register("message")}
          className="border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-all duration-200"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Versturen...
          </>
        ) : (
          <>
            Verstuur Aanvraag
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        Door dit formulier te versturen gaat u akkoord met onze{" "}
        <a href="/privacy" className="text-[#F97316] hover:underline">
          privacyverklaring
        </a>
      </p>
    </form>
  )
}