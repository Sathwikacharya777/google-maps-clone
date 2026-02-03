export interface Review {
    id: string;
    user: string;
    userImage?: string;
    rating: number;
    text: string;
    time: string;
    images?: string[];
    stats?: string;
    tags?: string[];
}

export interface Highlight {
    id: string;
    name: string;
    image: string;
    popular: boolean;
    price?: string;
}

export interface AttributeSection {
    title: string;
    items: { label: string; available: boolean }[];
}

export interface ReviewHighlight {
    id: string;
    text: string;
    snippet: string;
    userImage: string;
}

export interface PhotoGroup {
    id: string;
    title: string;
    image: string;
    count?: string;
}

export interface PlaceData {
    id: string;
    name: string;
    rating: number;
    reviewCount: number;
    priceSymbol: string;
    category: string;
    address: string;
    phone: string;
    website: string;
    openStatus: string;
    hours: { day: string; time: string }[];
    images: string[];
    reviews: Review[];
    features: string[];
    pricePerPerson: string;
    menuImages: string[];
    highlights: Highlight[];
    aboutGroups: AttributeSection[];
    ratingDistribution: { [key: number]: number };
    reviewHighlights: ReviewHighlight[];
    photoGroups: PhotoGroup[];
}

export const PLACE_DATA: PlaceData = {
    id: "1",
    name: "Hotel SHABARI",
    rating: 4.4,
    reviewCount: 189,
    priceSymbol: "₹1–200",
    category: "Fast food restaurant",
    address: "CPPV+3PW, NH 66, next to hotel SHABARI, Bramavara, Karnataka 576213",
    phone: "099867 69556",
    website: "",
    openStatus: "Open",
    hours: [
        { day: "Monday", time: "7:00 AM – 8:00 PM" },
        { day: "Tuesday", time: "7:00 AM – 8:00 PM" },
        { day: "Wednesday", time: "7:00 AM – 8:00 PM" },
        { day: "Thursday", time: "7:00 AM – 8:00 PM" },
        { day: "Friday", time: "7:00 AM – 8:00 PM" },
        { day: "Saturday", time: "7:00 AM – 8:00 PM" },
        { day: "Sunday", time: "7:00 AM – 8:00 PM" },
    ],
    images: [
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    ],
    features: ["Dine-in", "Drive-through"],
    pricePerPerson: "₹1–200 per person",

    menuImages: [
        "https://images.unsplash.com/photo-1574155376612-dd510940cc8b?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80",
    ],

    highlights: [
        { id: "1", name: "Tripple Fried Rice Combo", image: "https://images.unsplash.com/photo-1603133872878-684f10830303?auto=format&fit=crop&w=400&q=80", popular: false, price: "Combo" },
        { id: "2", name: "Chicken Fried Rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80", popular: true },
        { id: "3", name: "Chicken Manchow", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80", popular: false },
        { id: "4", name: "Gadbad Ice Cream", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", popular: false },
    ],

    reviews: [
        {
            id: "1",
            user: "abhi navya",
            userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
            stats: "Local Guide · 101 reviews · 96 photos",
            rating: 4,
            time: "3 months ago",
            text: "Hey guys...This place has a medium ambience, but the food is all good! Reasonable prices, clean, and upgraded street food vibes. I'm loving the triple rice, momos, and noodles - half portion is enough for 2. Definitely recommend",
            tags: ["Dine-in", "Lunch", "₹1-200"],
        },
        {
            id: "2",
            user: "John Doe",
            userImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
            rating: 5,
            time: "1 month ago",
            text: "Great food for the price!",
            stats: "15 reviews"
        }
    ],

    ratingDistribution: {
        5: 60,
        4: 30,
        3: 5,
        2: 1,
        1: 4
    },

    aboutGroups: [
        {
            title: "Accessibility",
            items: [
                { label: "Wheelchair-accessible car park", available: false },
                { label: "Wheelchair-accessible entrance", available: false },
            ]
        },
        {
            title: "Service options",
            items: [
                { label: "Drive-through", available: true },
                { label: "Takeaway", available: true },
                { label: "Dine-in", available: true },
            ]
        },
        {
            title: "Popular for",
            items: [
                { label: "Lunch", available: true },
                { label: "Solo dining", available: true },
            ]
        },
        {
            title: "Offerings",
            items: [
                { label: "All you can eat", available: true },
                { label: "Late-night food", available: true },
                { label: "Quick bite", available: true },
                { label: "Dishes", available: true },
            ]
        }
    ],

    reviewHighlights: [
        {
            id: "1",
            text: "\"Reasonable prices, clean, and upgraded street food vibes.\"",
            snippet: "street food vibes",
            userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
        },
        {
            id: "2",
            text: "\"Had a veg fried rice and chicken fried rice with chilli chicken.\"",
            snippet: "veg fried rice",
            userImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
        },
        {
            id: "3",
            text: "\"Service is also good, but the waiters could be better at paying attention.\"",
            snippet: "waiters",
            userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
        }
    ],

    photoGroups: [
        {
            id: "1",
            title: "All",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: "2",
            title: "Latest",
            count: "11 days ago",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: "3",
            title: "Videos",
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: "4",
            title: "Menu",
            image: "https://images.unsplash.com/photo-1574155376612-dd510940cc8b?auto=format&fit=crop&w=400&q=80"
        }
    ]
};
