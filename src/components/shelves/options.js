const options = [
  { value: "خارجی", label: "خارجی" },
  { value: "رمان", label: "رمان" },
  { value: "داستان های کوتاه", label: "داستان های کوتاه" },
  { value: "ایرانی", label: "ایرانی" },
  { value: "تاریخی", label: "تاریخی" },
  { value: "رئال", label: "رئال" },
];

export default options;

export const op = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "Child Node1",
        value: "0-0-0",
        key: "0-0-0",
      },
    ],
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1",
    children: [
      {
        title: "Child Node3",
        value: "0-1-0",
        key: "0-1-0",
      },
      {
        title: "Child Node4",
        value: "0-1-1",
        key: "0-1-1",
      },
      {
        title: "Child Node5",
        value: "0-1-2",
        key: "0-1-2",
      },
    ],
  },
];

export const option2 = [
  {
    title: "کتب خارجی",
    value: "کتب خارجی",
    // -
    children: [
      {
        title: "خارجی",
        value: "خارجی",
        // --
        children: [
          {
            title: "شاهنامه ",
            value: "شاهنامه",
          },
          {
            title: "بی حد و مرز ",
            value: "بی حد و مرز",
          },
        ],
      },
      {
        title: "رمان",
        value: "رمان",
        // --
        children: [
          {
            title: "کتاب تاریخی",
            value: "کتاب تاریخی",
          },
        ],
      },
      {
        title: "رئال",
        value: "رئال",
      },
      {
        title: "اساطیری",
        value: "اساطیری",
      },
    ],
  },

  // next shelf
  {
    title: "کتب داستانی",
    value: "کتب داستانی",

    children: [
      {
        title: "ایرانی",
        value: "ایرانی",
        children: [
          { title: "سمفونی مردگان", value: "سمفونی مردگان" },
          { title: "بوف کور", value: "بوف کور" },
        ],
      },
      {
        title: "اساطیری",
        value: "اساطیری",
      },
      {
        title: "عاشقانه",
        value: "عاشقانه",
        children: [
          { title: "ملت عشق", value: "ملت عشق" },
          { title: "غرور و تعصب", value: "غرور و تعصب" },
        ],
      },
    ],
  },
  // next shelf
  {
    title: "کتب روانشناسی",
    value: "کتب روانشناسی",
  },
];
