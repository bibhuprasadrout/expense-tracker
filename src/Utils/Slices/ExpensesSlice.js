import { createSlice } from "@reduxjs/toolkit";
const ExpensesSlice = createSlice({
  name: "expenses",
  initialState: {
    itemsAll: [
      {
        id: 1,
        type: "Fashion",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 11, 27),
      },
      {
        id: 2,
        type: "Necessities",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 11, 14),
      },
      {
        id: 3,
        type: "Food",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 11, 13),
      },
      {
        id: 4,
        type: "Fashion",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 11, 11),
      },
      {
        id: 5,
        type: "Food",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 11, 7),
      },
      {
        id: 6,
        type: "Necessities",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 11, 7),
      },
      {
        id: 7,
        type: "Necessities",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 11, 7),
      },
      {
        id: 8,
        type: "Food",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 11, 7),
      },
      {
        id: 9,
        type: "Necessities",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 10, 9),
      },
      {
        id: 10,
        type: "Food",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 10, 9),
      },
      {
        id: 11,
        type: "Necessities",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 10, 4),
      },
      {
        id: 12,
        type: "Necessities",
        title: "Pen",
        amount: 39.99,
        date: new Date(2021, 9, 18),
      },
      {
        id: 13,
        type: "Food",
        title: "Pen",
        amount: 39.99,
        date: new Date(2021, 9, 18),
      },
      {
        id: 14,
        type: "Necessities",
        title: "Pen",
        amount: 39.99,
        date: new Date(2021, 9, 17),
      },
      {
        id: 15,
        type: "Food",
        title: "Pen",
        amount: 39.99,
        date: new Date(2021, 9, 17),
      },
      {
        id: 16,
        type: "Necessities",
        title: "Pen",
        amount: 39.99,
        date: new Date(2021, 9, 17),
      },
      {
        id: 17,
        type: "Fashion",
        title: "Pen",
        amount: 39.99,
        date: new Date(2021, 9, 1),
      },
      {
        id: 18,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 8, 21),
      },
      {
        id: 19,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 8, 21),
      },
      {
        id: 20,
        type: "Fashion",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 8, 21),
      },
      {
        id: 21,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 8, 21),
      },
      {
        id: 22,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 8, 2),
      },
      {
        id: 23,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 8, 1),
      },
      {
        id: 24,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 7, 21),
      },
      {
        id: 25,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 7, 21),
      },
      {
        id: 26,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 7, 21),
      },
      {
        id: 27,
        type: "Fashion",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 7, 21),
      },
      {
        id: 28,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 7, 21),
      },
      {
        id: 29,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 7, 21),
      },
      {
        id: 30,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2021, 6, 21),
      },
      {
        id: 31,
        type: "Necessities",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2021, 5, 15),
      },
      {
        id: 32,
        type: "Necessities",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2021, 5, 5),
      },
      {
        id: 33,
        type: "Necessities",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2021, 5, 5),
      },
      {
        id: 34,
        type: "Necessities",
        title: "Rucksack",
        amount: 199.99,
        date: new Date(2021, 4, 15),
      },
      {
        id: 35,
        type: "Necessities",
        title: "Rucksack",
        amount: 199.99,
        date: new Date(2021, 4, 12),
      },
      {
        id: 36,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 3, 12),
      },
      {
        id: 37,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 3, 12),
      },
      {
        id: 38,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 3, 3),
      },
      {
        id: 39,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 3, 1),
      },
      {
        id: 40,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 2, 12),
      },
      {
        id: 41,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 2, 12),
      },
      {
        id: 42,
        type: "Fashion",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 2, 12),
      },
      {
        id: 43,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 2, 11),
      },
      {
        id: 44,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 2, 3),
      },
      {
        id: 45,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 2, 3),
      },
      {
        id: 46,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 1, 12),
      },
      {
        id: 47,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 1, 12),
      },
      {
        id: 48,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 1, 1),
      },
      {
        id: 49,
        type: "Fashion",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2021, 0, 12),
      },
      {
        id: 50,
        type: "Necessities",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2020, 11, 23),
      },
      {
        id: 51,
        type: "Food",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2020, 11, 23),
      },
      {
        id: 52,
        type: "Fashion",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2020, 11, 1),
      },
      {
        id: 53,
        type: "Necessities",
        title: "New Desk (Wooden)",
        amount: 467.78,
        date: new Date(2020, 10, 11),
      },
      {
        id: 54,
        type: "Food",
        title: "New Desk (Wooden)",
        amount: 467.78,
        date: new Date(2020, 10, 11),
      },
      {
        id: 55,
        type: "Necessities",
        title: "New Desk (Wooden)",
        amount: 467.78,
        date: new Date(2020, 10, 11),
      },
      {
        id: 56,
        type: "Necessities",
        title: "Pen",
        amount: 39.99,
        date: new Date(2020, 9, 18),
      },
      {
        id: 57,
        type: "Necessities",
        title: "Pen",
        amount: 39.99,
        date: new Date(2020, 9, 18),
      },
      {
        id: 58,
        type: "Food",
        title: "Pen",
        amount: 39.99,
        date: new Date(2020, 9, 18),
      },
      {
        id: 59,
        type: "Fashion",
        title: "Pen",
        amount: 39.99,
        date: new Date(2020, 9, 18),
      },
      {
        id: 60,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 8, 21),
      },
      {
        id: 61,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 7, 21),
      },
      {
        id: 62,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 6, 21),
      },
      {
        id: 63,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 6, 21),
      },
      {
        id: 64,
        type: "Necessities",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 65,
        type: "Food",
        title: "Rucksack",
        amount: 199.99,
        date: new Date(2015, 4, 12),
      },
      {
        id: 66,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 3, 12),
      },
      {
        id: 67,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 3, 12),
      },
      {
        id: 68,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 3, 12),
      },
      {
        id: 69,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 3, 12),
      },
      {
        id: 70,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 2, 12),
      },
      {
        id: 71,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 1, 12),
      },
      {
        id: 72,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 1, 12),
      },
      {
        id: 73,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 0, 12),
      },
      {
        id: 74,
        type: "Necessities",
        title: "New Closet Door",
        amount: 354.12,
        date: new Date(2019, 11, 12),
      },
      {
        id: 75,
        type: "Necessities",
        title: "Beer Cooler",
        amount: 586.0,
        date: new Date(2019, 10, 3),
      },
      {
        id: 76,
        type: "Necessities",
        title: "Beer Cooler",
        amount: 586.0,
        date: new Date(2019, 10, 3),
      },
      {
        id: 77,
        type: "Food",
        title: "Beer Cooler",
        amount: 586.0,
        date: new Date(2019, 10, 3),
      },
      {
        id: 78,
        type: "Necessities",
        title: "Beer Cooler",
        amount: 586.0,
        date: new Date(2019, 10, 3),
      },
      {
        id: 79,
        type: "Fashion",
        title: "Refrigirator",
        amount: 654.67,
        date: new Date(2019, 9, 14),
      },
      {
        id: 80,
        type: "Fashion",
        title: "Garbage Bags",
        amount: 73.89,
        date: new Date(2019, 8, 23),
      },
      {
        id: 81,
        type: "Fashion",
        title: "Garbage Bags",
        amount: 73.89,
        date: new Date(2019, 8, 23),
      },
      {
        id: 82,
        type: "Necessities",
        title: "Large Cooking Pan",
        amount: 150.34,
        date: new Date(2019, 7, 11),
      },
      {
        id: 83,
        type: "Necessities",
        title: "Truck Rear Wheels",
        amount: 730.29,
        date: new Date(2019, 6, 18),
      },
      {
        id: 84,
        type: "Necessities",
        title: "Rucksack",
        amount: 199.99,
        date: new Date(2015, 4, 12),
      },
      {
        id: 85,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 3, 12),
      },
      {
        id: 86,
        type: "Fashion",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 2, 12),
      },
      {
        id: 87,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 2, 12),
      },
      {
        id: 88,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 2, 12),
      },
      {
        id: 89,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 1, 12),
      },
      {
        id: 90,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 0, 12),
      },
      {
        id: 91,
        type: "Food",
        title: "Faucet",
        amount: 47.34,
        date: new Date(2018, 11, 12),
      },
      {
        id: 92,
        type: "Fashion",
        title: "Faucet",
        amount: 47.34,
        date: new Date(2018, 11, 12),
      },
      {
        id: 93,
        type: "Necessities",
        title: "Faucet",
        amount: 47.34,
        date: new Date(2018, 11, 12),
      },
      {
        id: 94,
        type: "Food",
        title: "Faucet",
        amount: 47.34,
        date: new Date(2018, 11, 12),
      },
      {
        id: 95,
        type: "Necessities",
        title: "Faucet",
        amount: 47.34,
        date: new Date(2018, 11, 12),
      },
      {
        id: 96,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 9, 21),
      },
      {
        id: 97,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 8, 21),
      },
      {
        id: 98,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 8, 21),
      },
      {
        id: 99,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 8, 21),
      },
      {
        id: 100,
        type: "Fashion",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 7, 21),
      },
      {
        id: 101,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 6, 21),
      },
      {
        id: 102,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 6, 21),
      },
      {
        id: 103,
        type: "Fashion",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 104,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 1, 12),
      },
      {
        id: 105,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 0, 12),
      },
      {
        id: 106,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 0, 12),
      },
      {
        id: 107,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 0, 12),
      },
      {
        id: 108,
        type: "Necessities",
        title: "Dark Window Sheets",
        amount: 632.23,
        date: new Date(2017, 11, 13),
      },
      {
        id: 109,
        type: "Fashion",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 10, 21),
      },
      {
        id: 110,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 7, 21),
      },
      {
        id: 111,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 7, 21),
      },
      {
        id: 112,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 7, 21),
      },
      {
        id: 113,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 7, 21),
      },
      {
        id: 114,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 6, 21),
      },
      {
        id: 115,
        type: "Necessities",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 116,
        type: "Food",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 117,
        type: "Necessities",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 118,
        type: "Food",
        title: "Rucksack",
        amount: 199.99,
        date: new Date(2015, 4, 12),
      },
      {
        id: 119,
        type: "Fashion",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 3, 12),
      },
      {
        id: 120,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 3, 12),
      },
      {
        id: 121,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 1, 12),
      },
      {
        id: 122,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 1, 12),
      },
      {
        id: 123,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 0, 12),
      },
      {
        id: 124,
        type: "Fashion",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 11, 21),
      },
      {
        id: 125,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 10, 21),
      },
      {
        id: 126,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 10, 21),
      },
      {
        id: 127,
        type: "Food",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 10, 21),
      },
      {
        id: 128,
        type: "Fashion",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 7, 21),
      },
      {
        id: 129,
        type: "Necessities",
        title: "Water Filter",
        amount: 323.34,
        date: new Date(2016, 6, 21),
      },
      {
        id: 130,
        type: "Food",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 131,
        type: "Food",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 132,
        type: "Necessities",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 133,
        type: "Food",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 134,
        type: "Necessities",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 135,
        type: "Necessities",
        title: "White Bed Sheets",
        amount: 130.23,
        date: new Date(2016, 5, 5),
      },
      {
        id: 136,
        type: "Fashion",
        title: "Rucksack",
        amount: 199.99,
        date: new Date(2015, 4, 12),
      },
      {
        id: 137,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 3, 12),
      },
      {
        id: 138,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 0, 12),
      },
      {
        id: 139,
        type: "Necessities",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 11, 2),
      },
      {
        id: 140,
        type: "Fashion",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 10, 2),
      },
      {
        id: 141,
        type: "Necessities",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 10, 2),
      },
      {
        id: 142,
        type: "Food",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 10, 2),
      },
      {
        id: 143,
        type: "Necessities",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 10, 2),
      },
      {
        id: 144,
        type: "Fashion",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 10, 2),
      },
      {
        id: 145,
        type: "Food",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 10, 2),
      },
      {
        id: 146,
        type: "Fashion",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 10, 2),
      },
      {
        id: 147,
        type: "Food",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 8, 2),
      },
      {
        id: 148,
        type: "Food",
        title: "Jump Ropes",
        amount: 89.99,
        date: new Date(2015, 7, 2),
      },
      {
        id: 149,
        type: "Fashion",
        title: "Mens Cotton Clothes",
        amount: 300.67,
        date: new Date(2015, 5, 17),
      },
      {
        id: 150,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 4, 12),
      },
      {
        id: 151,
        type: "Fashion",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 1, 12),
      },
      {
        id: 152,
        type: "Necessities",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 1, 12),
      },
      {
        id: 153,
        type: "Fashion",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 1, 12),
      },
      {
        id: 154,
        type: "Food",
        title: "Nail Gun",
        amount: 90.22,
        date: new Date(2015, 0, 12),
      },
    ],
    itemsFiltered: [],
    itemsForRender: [],
    filterOptions: {
      type: "All",
      year: "All",
      month: "All",
      day: "All",
      order: false,
    },
  },
  reducers: {
    handleFilterOptions: (state, action) => {
      state.filterOptions = action.payload;
    },
    all: (state) => {
      const { itemsAll } = state;
      state.itemsFiltered = itemsAll;
      state.itemsForRender = state.itemsFiltered;
    },
    fashion: (state) => {
      const { itemsAll } = state;
      state.itemsFiltered = itemsAll;
      const itemsFashionFiltered = state.itemsFiltered;
      state.itemsFiltered = [];
      itemsFashionFiltered.map((item) => {
        if (item.type === "Fashion") {
          state.itemsFiltered.push(item);
        }
      });
      state.itemsForRender = state.itemsFiltered;
    },
    food: (state) => {
      const { itemsAll } = state;
      state.itemsFiltered = itemsAll;
      const itemsFoodFiltered = state.itemsFiltered;
      state.itemsFiltered = [];
      itemsFoodFiltered.map((item) => {
        if (item.type === "Food") {
          state.itemsFiltered.push(item);
        }
      });
      state.itemsForRender = state.itemsFiltered;
    },
    necessities: (state) => {
      const { itemsAll } = state;
      state.itemsFiltered = itemsAll;
      const itemsNecessitiesFiltered = state.itemsFiltered;
      state.itemsFiltered = [];
      itemsNecessitiesFiltered.map((item) => {
        if (item.type === "Necessities") {
          state.itemsFiltered.push(item);
        }
      });
      state.itemsForRender = state.itemsFiltered;
    },
    transportation: (state) => {
      const { itemsAll } = state;
      state.itemsFiltered = itemsAll;
      const itemsTransportationFiltered = state.itemsFiltered;
      state.itemsFiltered = [];
      itemsTransportationFiltered.map((item) => {
        if (item.type === "Transportation") {
          state.itemsFiltered.push(item);
        }
      });
      state.itemsForRender = state.itemsFiltered;
    },
    handleDateYear: (state) => {
      let year = state.filterOptions.year;
      state.itemsForRender = [];
      if (year === "All") {
        state.filterOptions.month = "All";
        state.filterOptions.day = "All";
        state.itemsFiltered.filter((item) => state.itemsForRender.push(item));
      } else {
        year = Number(year);
        state.itemsFiltered.filter((item) => {
          if (item.date.getFullYear() === year) {
            state.itemsForRender.push(item);
          }
        });
      }
    },
    handleDateMonth: (state) => {
      const year = state.filterOptions.year;
      const yearNum = Number(state.filterOptions.year);
      const month = state.filterOptions.month;
      state.itemsForRender = [];
      if (month === "All") {
        state.filterOptions.day = "All";
        state.itemsFiltered.filter((item) => {
          if (year === "All") {
            state.itemsForRender.push(item);
          } else if (item.date.getFullYear() === yearNum) {
            state.itemsForRender.push(item);
          }
        });
      } else {
        state.itemsFiltered.filter((item) => {
          if (
            item.date.getFullYear() === yearNum &&
            item.date.toLocaleString("en-GB", { month: "long" }) === month
          ) {
            state.itemsForRender.push(item);
          }
        });
      }
    },
    handleDateDay: (state) => {
      const year = state.filterOptions.year;
      const yearNum = Number(state.filterOptions.year);
      const month = state.filterOptions.month;
      const day = state.filterOptions.day;
      state.itemsForRender = [];
      if (day === "All") {
        state.itemsFiltered.filter((item) => {
          if (year === "All") {
            state.itemsForRender.push(item);
          } else if (
            item.date.getFullYear() === yearNum &&
            item.date.toLocaleString("en-GB", { month: "long" }) === month
          ) {
            state.itemsForRender.push(item);
          }
        });
      } else {
        state.itemsFiltered.filter((item) => {
          if (
            item.date.getFullYear() === yearNum &&
            item.date.toLocaleString("en-GB", { month: "long" }) === month &&
            item.date.toLocaleString("en-GB", { day: "numeric" }) === day
          ) {
            state.itemsForRender.push(item);
          }
        });
      }
    },
    handleOrder: (state) => {
      const itemsForRenderHolder = state.itemsForRender;
      state.itemsForRender = [];
      itemsForRenderHolder.reverse().map((item) => {
        state.itemsForRender.push(item);
      });
    },
  },
});
export const {
  handleFilterOptions,
  all,
  fashion,
  food,
  necessities,
  transportation,
  handleDateYear,
  handleDateMonth,
  handleDateDay,
  handleOrder,
} = ExpensesSlice.actions;
export default ExpensesSlice.reducer;
