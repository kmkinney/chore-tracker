export const choreChart = {
    name: 'Kevin\'s Chore Chart',
    people: [
        {
            id: 1,
            name: 'Kevin',
            days: [
                {
                    name: "friday",
                    chores: [
                        {
                            id: 1,
                            done: false,
                        },
                        {
                            id: 2,
                            done: false,
                        },
                        {
                            id: 3,
                            done: false,
                        },
                        {
                            id: 4,
                            done: false,
                        },
                    ],
                },
            ]
        },
        {
            id: 2,
            name: 'Gretchen',
            chores: [
                {
                    id: 2,
                    day: "monday",
                    done: true
                }
            ]
        },
        {
            id: 3,
            name: 'Gloves',
            chores: [
                {
                    id: 6,
                    day: "sunday",
                    done: true
                }
            ]
        }
    ],
    chores: [
        {
            id: 1,
            name: 'Dishes',
            description: 'Wash the dishes',
        },
        {
            id: 2,
            name: 'Living Room',
            description: 'Wash the dishes',
        },
        {
            id: 3,
            name: 'Walk Gloves',
            description: 'Wash the dishes',
        },
        {
            id: 4,
            name: 'Trash',
            description: 'Wash the dishes',
        },
        {
            id: 5,
            name: 'Laundry',
            description: 'Wash the dishes',
        },
        {
            id: 6,
            name: 'Bark',
            description: 'Wash the dishes',
        },
    ]
}