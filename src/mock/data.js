// image imports
import mainImg from "/users/mainUser.jpeg";
import img1 from "/users/user1.jpeg";
import img2 from "/users/user2.jpeg";
import img3 from "/users/user3.jpeg";
import img4 from "/users/user4.jpeg";
import img5 from "/users/user5.jpeg";

// Cards data

export const cardsData = [
  {
    id: 'orders',
    title: 'Orders',
    value: 1587,
    change: '+11%',
    color: 'up',
    icon: 'cube',
  },
  {
    id: 'revenue',
    title: 'Revenue',
    value: 46782,
    currency: '$',
    change: '-29%',
    color: 'down',
    icon: 'buffer',
  },
  {
    id: 'averagePrice',
    title: 'Average Price',
    value: 15.9,
    currency: '$',
    change: '0%',
    color: 'neutral',
    icon: 'tag',
  },
  {
    id: 'productSold',
    title: 'Product Sold',
    value: 1890,
    change: '+85%',
    color: 'up',
    icon: 'briefcase',
  },
]


// First graph Data

export const firstGraphData = {
  totals: {
    marketplace: 56241,
    totalIncome: 23651
  },
  salesBreakdown: [
    { label: 'Download Sales', value: 19.4 },
    { label: 'In-Store Sales', value: 48.4 },
    { label: 'Mail-Order Sales', value: 32.3 }
  ]
}

// Second graph data

export const secondGraphData = {
  summary: {
    marketplace: 89425,
    totalIncome: 56210,
    lastMonth: 8974
  },
  years: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
  series: [
    {
      name: 'A',
      data: [150, 60, 180, 90, 75, 30],
      color: '#1b1f71'
    },
    {
      name: 'B',
      data: [45, 150, 36, 60, 240, 30],
      color: '#ffffffb3'
    },
    {
      name: 'C',
      data: [15, 195, 21, 360, 120, 30],
      color: '#1b1f71'
    }
  ]
}

// Third graph
export const thirdGraphData = {
  summary: {
    marketplace: 2548,
    totalIncome: 6985
  },
  years: [
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016'
  ],

  series: [
    {
      name: 'Blue',
      seria: 'A',
      data: [45, 75, 100, 75, 100, 75, 50, 75, 50, 75, 100, 80]
    },
    {
      name: 'White',
      seria: 'B',
      data: [180, 65, 90, 65, 90, 65, 40, 65, 40, 65, 90, 65]
    }
  ]
}

// Inbox
export const inboxData = [
  {
    id: 1,
    name: 'Misty',
    message: "Hey! there I'm available...",
    time: '13:40 PM',
    img: '/users/mainUser.jpeg'
  },
  {
    id: 2,
    name: 'Melissa',
    message: "I've finished it! See you so...",
    time: '13:34 PM',
    img: '/users/user1.jpeg'
  },
  {
    id: 3,
    name: 'Dwayne',
    message: 'This theme is awesome!',
    time: '13:17 PM',
    img: '/users/user2.jpeg'
  },
  {
    id: 4,
    name: 'Martin',
    message: 'Nice to meet you',
    time: '12:20 PM',
    img: '/users/user3.jpeg'
  },
  {
    id: 5,
    name: 'Vincent',
    message: 'Hey! there Im avaliable',
    time: '11:47 PM',
    img: '/users/user4.jpeg'
  },
  {
    id: 6,
    name: 'Robert Chappa',
    message: 'Hey! there Im avaliable',
    time: '10:12 PM',
    img: '/users/user6.jpeg'
  }
]

// Activity feed
export const activityFeed = [
  {
    date: 'JUN 25',
    text: 'Responded to need "Volunteer Activities"'
  },
  {
    date: 'JUN 24',
    text: 'Added an interest "Volunteer Activities"'
  },
  {
    date: 'JUN 23',
    text: 'Joined the group "Boardsmanship Forum"'
  },
  {
    date: 'JUN 21',
    text: 'Responded to need "In-Kind Opportunity"'
  }
]

// Testimonials

const testimData = {
  text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe the same vocabulary. The languages only in their grammar.',
  author: 'Marie Minnick',
  role: 'Marketing Manager',
  img: '/users/user1.jpeg'
}

// Transactions
export const transactions = [
    {
        id: 1,
        name: "Herbert C. Patton",
        img: img1,
        status: "Confirm",
        statusColor: "bg-[#58db83]",
        amount: "14,584",
        date: "5/12/2016",
    },
    {
        id: 2,
        name: "Mathias N. Klausen",
        img: img2,
        status: "Waiting payment",
        statusColor: "bg-[#f5b225]",
        amount: "8,541",
        date: "10/11/2016",
    },
    {
        id: 3,
        name: "Nikolaj S. Henriksen",
        img: img3,
        status: "Confirm",
        statusColor: "bg-[#58db83]",
        amount: "954",
        date: "8/11/2016",
    },
    {
        id: 4,
        name: "Lasse C. Overgaard",
        img: img4,
        status: " Payment expired",
        statusColor: "bg-[#ec536c]",
        amount: "44,584",
        date: "7/11/2016",
    },
    {
        id: 5,
        name: "Kasper S. Jessen",
        img: img5,
        status: " Confirm",
        statusColor: "bg-[#58db83]",
        amount: "8,844",
        date: "1/11/2016",
    },
];

// Order
export const order = [
    {
        id: '#12354781',
        name: "Riverston Glass Chair",
        img: mainImg,
        status: "Delivered",
        statusColor: "bg-[rgb(88,219,131)]",
        amount: "185",
        date: "5/12/2016",
    },
    {
        id: '#52140300',
        name: "Shine Company Catalina",
        img: img1,
        status: "Delivered",
        statusColor: "bg-[rgb(88,219,131)]",
        amount: "1,024",
        date: "5/12/2016",
    },
    {
        id: '#96254137',
        name: "Trex Outdoor Furniture Cape",
        img: img2,
        status: "Confirm",
        statusColor: "bg-[#ef6767]",
        amount: "657",
        date: "5/12/2016",
    },
    {
        id: '#12365474',
        name: "Oasis Bathroom Teak Corner",
        img: img3,
        status: "Shipped",
        statusColor: "bg-[#f5b225]",
        amount: "8451",
        date: "5/12/2016",
    },
    {
        id: '#85214796',
        name: "BeoPlay Speaker",
        img: img4,
        status: "Delivered",
        statusColor: "bg-[rgb(88,219,131)]",
        amount: "584",
        date: "5/12/2016",
    },
    {
        id: '#12354781',
        name: "Riverston Glass Chair",
        img: img5,
        status: "Delivered",
        statusColor: "bg-[rgb(88,219,131)]",
        amount: "185",
        date: "5/12/2016",
    }
];

