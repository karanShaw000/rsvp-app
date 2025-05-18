import { toggleRsvp } from "@/api/event"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Event } from "@/lib/types"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"

interface EventCardProps extends Omit<Event, "rsvpList"> {
}

export default function EventCard({ _id, title, description, isUserRsvped, date }: EventCardProps) {
  console.log(date)
  const [isRsvped, setIsRsvped] = useState(isUserRsvped)
  const [isPending, setIsPending] = useState(false)

  const toggleRsvpedHandler = async () => {
    setIsPending(true)
    try {
      const res = await toggleRsvp(_id)
      if (res && res.message) {
        setIsRsvped(prev => !prev)
      }
    } catch (error: any) {
      alert(error.message || "Failed to create a note")
    }
    setIsPending(false)
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(date))

  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>{formattedDate}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 pt-4">
        <Button onClick={toggleRsvpedHandler} disabled={isPending} className="w-full">
          {isPending ? "Rsvping..." : isRsvped ? "RSVPed" : "RSVP Now"}
        </Button>
      </CardFooter>
    </Card>
  )
}

