export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  user: {
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  postId?: string;
}

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    user: {
      username: 'john_doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    content: 'liked your post',
    postId: '1',
    timestamp: '2m ago'
  },
  {
    id: '2',
    type: 'comment',
    user: {
      username: 'jane_smith',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    content: 'commented: "Amazing shot! 📸"',
    postId: '2',
    timestamp: '15m ago'
  },
  {
    id: '3',
    type: 'follow',
    user: {
      username: 'travel_mike',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    content: 'started following you',
    timestamp: '1h ago'
  },
  {
    id: '4',
    type: 'mention',
    user: {
      username: 'photo_enthusiast',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    content: 'mentioned you in a comment: "@user Great composition!"',
    postId: '3',
    timestamp: '2h ago'
  },
  {
    id: '5',
    type: 'like',
    user: {
      username: 'art_lover',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    content: 'liked your post',
    postId: '1',
    timestamp: '3h ago'
  },
  {
    id: '6',
    type: 'comment',
    user: {
      username: 'nature_lover',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    content: 'commented: "Beautiful landscape! 🌄"',
    postId: '4',
    timestamp: '4h ago'
  },
  {
    id: '7',
    type: 'follow',
    user: {
      username: 'photo_pro',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    content: 'started following you',
    timestamp: '5h ago'
  },
  {
    id: '8',
    type: 'mention',
    user: {
      username: 'creative_soul',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    content: 'mentioned you in a comment: "@user Love your style!"',
    postId: '5',
    timestamp: '6h ago'
  },
  {
    id: '9',
    type: 'like',
    user: {
      username: 'world_explorer',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    content: 'liked your post',
    postId: '6',
    timestamp: '7h ago'
  },
  {
    id: '10',
    type: 'comment',
    user: {
      username: 'adventure_seeker',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    content: 'commented: "Incredible adventure! 🏔️"',
    postId: '7',
    timestamp: '8h ago'
  },
  {
    id: '11',
    type: 'follow',
    user: {
      username: 'urban_photographer',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    content: 'started following you',
    timestamp: '9h ago'
  },
  {
    id: '12',
    type: 'mention',
    user: {
      username: 'street_artist',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    content: 'mentioned you in a comment: "@user Perfect timing!"',
    postId: '8',
    timestamp: '10h ago'
  },
  {
    id: '13',
    type: 'like',
    user: {
      username: 'wanderlust_soul',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
    content: 'liked your post',
    postId: '9',
    timestamp: '11h ago'
  },
  {
    id: '14',
    type: 'comment',
    user: {
      username: 'light_chaser',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg'
    },
    content: 'commented: "Fantastic lighting! ✨"',
    postId: '10',
    timestamp: '12h ago'
  },
  {
    id: '15',
    type: 'follow',
    user: {
      username: 'moment_catcher',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    content: 'started following you',
    timestamp: '13h ago'
  }
];