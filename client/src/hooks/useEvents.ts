import { getAllEvents } from "@/api/event";
import type { Event } from "@/lib/types";
import { useEffect, useState } from "react";


export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const res = await getAllEvents();
        setEvents(res?.data?.events ?? []);
      } catch (err) {
        const message = (err as Error)?.message || "Something went wrong";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, isLoading, error };
};

