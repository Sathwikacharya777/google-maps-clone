export interface Review {
    id: string;
    user: string;
    rating: number;
    text: string;
    time: string;
}

export interface PlaceData {
    id: string;
    name: string;
    rating: number;
    reviewCount: number;
    category: string;
    address: string;
    phone: string;
    website: string;
    openStatus: string; // e.g., "Open now"
    hours: { day: string; time: string }[];
    images: string[];
    reviews: Review[];
}

export const PLACE_DATA: PlaceData = {
    id: "1",
    name: "The Grindsmith Coffee",
    rating: 4.8,
    reviewCount: 2450,
    category: "Coffee Shop",
    address: "1234 Market St, San Francisco, CA 94103, United States",
    phone: "+1 415-555-0123",
    website: "thegrindsmith.com",
    openStatus: "Open now",
    hours: [
        { day: "Monday", time: "6:00 AM – 8:00 PM" },
        { day: "Tuesday", time: "6:00 AM – 8:00 PM" },
        { day: "Wednesday", time: "6:00 AM – 8:00 PM" },
        { day: "Thursday", time: "6:00 AM – 8:00 PM" },
        { day: "Friday", time: "6:00 AM – 9:00 PM" },
        { day: "Saturday", time: "7:00 AM – 9:00 PM" },
        { day: "Sunday", time: "7:00 AM – 7:00 PM" },
    ],
    images: [
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    ],
    reviews: [],
};
