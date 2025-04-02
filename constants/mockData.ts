export interface Post {
  id: string;
  user: {
    username: string;
    avatar: string;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/51/800/800',
    caption: 'Beautiful sunset at the beach! 🌅 #nature #photography',
    likes: 1234,
    comments: 56,
    timestamp: '2h ago'
  },
  {
    id: '2',
    user: {
      username: 'jane_smith',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    image: 'https://picsum.photos/id/76/800/800',
    caption: 'Coffee time ☕️ #coffeelover',
    likes: 892,
    comments: 23,
    timestamp: '4h ago'
  },
  {
    id: '3',
    user: {
      username: 'travel_mike',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    image: 'https://picsum.photos/id/25/800/800',
    caption: 'Exploring new places 🌎 #travel #adventure',
    likes: 2456,
    comments: 78,
    timestamp: '6h ago'
  },
  {
    id: '4',
    user: {
      username: 'abu_talha',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    image: 'https://picsum.photos/id/43/800/800',
    caption: 'City at night 🌃 #nightlife #photography',
    likes: 2567,
    comments: 92,
    timestamp: '8h ago'
  },
  {
    id: '5',
    user: {
      username: 'fariya_khan',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    image: 'https://picsum.photos/id/60/800/800',
    caption: 'workstation 🏢 #work #office',
    likes: 1245,
    comments: 75,
    timestamp: '9h ago'
  },
  {
    id: '6',
    user: {
      username: 'sarah_fitness',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    image: 'https://picsum.photos/id/64/800/800',
    caption: 'Morning workout done! 💪 #fitness #healthy',
    likes: 1567,
    comments: 45,
    timestamp: '10h ago'
  },
  {
    id: '7',
    user: {
      username: 'chef_mario',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    image: 'https://picsum.photos/id/68/800/800',
    caption: 'Homemade pasta! 🍝 #cooking #foodie',
    likes: 3421,
    comments: 112,
    timestamp: '12h ago'
  },
  {
    id: '8',
    user: {
      username: 'music_dave',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    image: 'https://picsum.photos/id/71/800/800',
    caption: 'New song dropping soon! 🎵 #music #artist',
    likes: 2198,
    comments: 89,
    timestamp: '14h ago'
  },
  {
    id: '9',
    user: {
      username: 'pet_lover',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    image: 'https://picsum.photos/id/73/800/800',
    caption: 'My cute puppy! 🐕 #pets #dogs',
    likes: 4532,
    comments: 234,
    timestamp: '16h ago'
  },
  {
    id: '10',
    user: {
      username: 'tech_geek',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    image: 'https://picsum.photos/id/75/800/800',
    caption: 'New gadget unboxing! 📱 #tech #gadgets',
    likes: 1876,
    comments: 67,
    timestamp: '18h ago'
  },
  {
    id: '11',
    user: {
      username: 'artist_emma',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    image: 'https://picsum.photos/id/77/800/800',
    caption: 'Latest artwork! 🎨 #art #creative',
    likes: 2345,
    comments: 98,
    timestamp: '20h ago'
  },
  {
    id: '12',
    user: {
      username: 'garden_guru',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    image: 'https://picsum.photos/id/79/800/800',
    caption: 'Spring blooms! 🌸 #garden #flowers',
    likes: 1654,
    comments: 45,
    timestamp: '22h ago'
  },
  {
    id: '13',
    user: {
      username: 'skater_boy',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    image: 'https://picsum.photos/id/81/800/800',
    caption: 'New trick mastered! 🛹 #skateboarding #sports',
    likes: 3267,
    comments: 156,
    timestamp: '1d ago'
  },
  {
    id: '14',
    user: {
      username: 'book_worm',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
    image: 'https://picsum.photos/id/83/800/800',
    caption: 'Current read 📚 #books #reading',
    likes: 1432,
    comments: 67,
    timestamp: '1d ago'
  },
  {
    id: '15',
    user: {
      username: 'fashion_nina',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    image: 'https://picsum.photos/id/85/800/800',
    caption: 'OOTD 👗 #fashion #style',
    likes: 5678,
    comments: 234,
    timestamp: '1d ago'
  },
  {
    id: '16',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/90/800/800',
    caption: 'Morning hike with friends 🏃‍♂️ #fitness #outdoors',
    likes: 2345,
    comments: 89,
    timestamp: '1d ago'
  },
  {
    id: '17',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/91/800/800',
    caption: 'Perfect lunch spot 🍱 #foodie #lifestyle',
    likes: 1876,
    comments: 45,
    timestamp: '2d ago'
  },
  {
    id: '18',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/92/800/800',
    caption: 'Weekend vibes 🎸 #music #relax',
    likes: 3421,
    comments: 123,
    timestamp: '2d ago'
  },
  {
    id: '19',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/93/800/800',
    caption: 'City exploration 🌆 #urban #photography',
    likes: 2198,
    comments: 67,
    timestamp: '2d ago'
  },
  {
    id: '20',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/94/800/800',
    caption: 'Home office setup 💻 #work #productivity',
    likes: 1543,
    comments: 34,
    timestamp: '3d ago'
  },
  {
    id: '21',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/95/800/800',
    caption: 'Evening run 🏃‍♂️ #fitness #motivation',
    likes: 2876,
    comments: 91,
    timestamp: '3d ago'
  },
  {
    id: '22',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/96/800/800',
    caption: 'Book and coffee ☕️ #reading #relaxation',
    likes: 1987,
    comments: 56,
    timestamp: '3d ago'
  },
  {
    id: '23',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/73/800/800',
    caption: 'New hobby: painting 🎨 #art #creative',
    likes: 2654,
    comments: 78,
    timestamp: '4d ago'
  },
  {
    id: '24',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/98/800/800',
    caption: 'Game night with friends 🎮 #gaming #fun',
    likes: 3098,
    comments: 112,
    timestamp: '4d ago'
  },
  {
    id: '25',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/99/800/800',
    caption: 'Sunset meditation 🧘‍♂️ #mindfulness #peace',
    likes: 2345,
    comments: 67,
    timestamp: '4d ago'
  },
  {
    id: '26',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/100/800/800',
    caption: 'Morning yoga session 🧘‍♀️ #wellness #health',
    likes: 1876,
    comments: 45,
    timestamp: '5d ago'
  },
  {
    id: '27',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/101/800/800',
    caption: 'Cooking experiments 👨‍🍳 #foodie #homemade',
    likes: 2198,
    comments: 89,
    timestamp: '5d ago'
  },
  {
    id: '28',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/102/800/800',
    caption: 'Weekend hiking adventure 🏔️ #nature #explore',
    likes: 3421,
    comments: 156,
    timestamp: '6d ago'
  },
  {
    id: '29',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/103/800/800',
    caption: 'Guitar practice time 🎸 #music #practice',
    likes: 1543,
    comments: 34,
    timestamp: '6d ago'
  },
  {
    id: '30',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/104/800/800',
    caption: 'Beach day with friends 🏖️ #summer #fun',
    likes: 2876,
    comments: 98,
    timestamp: '7d ago'
  },
  {
    id: '31',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/55/800/800',
    caption: 'New photography project 📸 #photography #art',
    likes: 2154,
    comments: 76,
    timestamp: '7d ago'
  },
  {
    id: '32',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    image: 'https://picsum.photos/id/106/800/800',
    caption: 'Late night coding session 💻 #programming #developer',
    likes: 1987,
    comments: 82,
    timestamp: '1w ago'
  },
];