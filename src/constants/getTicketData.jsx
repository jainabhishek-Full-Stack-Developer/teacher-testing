export const getTicketData = () => {
    return [
        {
            id: 1,
            uuid: "728ed52f",
            student_id: "STU12345",
            ticket_id: "TCKT1001",
            ticket_title: "Issue with Video Playback",
            ticket_message: "I am unable to play the recorded session.",
            messages: [
                {
                    id: 101,
                    uuid: "msg1a",
                    ticket_id: "TCKT1001",
                    student_message: "The video is not loading properly.",
                    message_created_date_time: "2025-02-27 11:00 AM"
                },
                {
                    id: 102,
                    uuid: "msg1b",
                    ticket_id: "TCKT1001",
                    admin_message: "Please try clearing your browser cache.",
                    message_created_date_time: "2025-02-27 11:15 AM"
                }
            ],
            ticket_status: "Open",
            created_date_time: "2025-02-27 10:30 AM"
        },
        {
            id: 2,
            uuid: "a9bc3d1e",
            student_id: "STU67890",
            ticket_id: "TCKT1002",
            ticket_title: "Video Download Not Working",
            ticket_message: "I am unable to download the lecture video.",
            messages: [
                {
                    id: 103,
                    uuid: "msg2a",
                    ticket_id: "TCKT1002",
                    student_message: "The download button is not responding.",
                    message_created_date_time: "2025-02-26 04:00 PM"
                },
                {
                    id: 104,
                    uuid: "msg2b",
                    ticket_id: "TCKT1002",
                    admin_message: "We are looking into the issue and will update soon.",
                    message_created_date_time: "2025-02-26 04:20 PM"
                }
            ],
            ticket_status: "In Progress",
            created_date_time: "2025-02-26 03:45 PM"
        },
        {
            id: 3,
            uuid: "f23d4a67",
            student_id: "STU45678",
            ticket_id: "TCKT1003",
            ticket_title: "Audio Issue in Recorded Session",
            ticket_message: "The audio is too low in the lecture video.",
            messages: [
                {
                    id: 105,
                    uuid: "msg3a",
                    ticket_id: "TCKT1003",
                    student_message: "I can barely hear the instructor.",
                    message_created_date_time: "2025-02-25 08:30 AM"
                },
                {
                    id: 106,
                    uuid: "msg3b",
                    ticket_id: "TCKT1003",
                    admin_message: "We will enhance the audio and re-upload it.",
                    message_created_date_time: "2025-02-25 08:50 AM"
                }
            ],
            ticket_status: "Resolved",
            created_date_time: "2025-02-25 08:20 AM"
        },
        {
            id: 4,
            uuid: "e89b12cd",
            student_id: "STU98765",
            ticket_id: "TCKT1004",
            ticket_title: "Wrong Lecture Uploaded",
            ticket_message: "The video uploaded is from a different course.",
            messages: [
                {
                    id: 107,
                    uuid: "msg4a",
                    ticket_id: "TCKT1004",
                    student_message: "This is not the Business Management lecture.",
                    message_created_date_time: "2025-02-24 06:20 PM"
                },
                {
                    id: 108,
                    uuid: "msg4b",
                    ticket_id: "TCKT1004",
                    admin_message: "We will replace it with the correct video shortly.",
                    message_created_date_time: "2025-02-24 06:40 PM"
                }
            ],
            ticket_status: "Open",
            created_date_time: "2025-02-24 06:10 PM"
        },
        {
            id: 5,
            uuid: "b56d789f",
            student_id: "STU34567",
            ticket_id: "TCKT1005",
            ticket_title: "Missing Subtitles",
            ticket_message: "The subtitles are not appearing in the video.",
            messages: [
                {
                    id: 109,
                    uuid: "msg5a",
                    ticket_id: "TCKT1005",
                    student_message: "I need subtitles to understand better.",
                    message_created_date_time: "2025-02-23 12:10 PM"
                },
                {
                    id: 110,
                    uuid: "msg5b",
                    ticket_id: "TCKT1005",
                    admin_message: "We will generate subtitles and update soon.",
                    message_created_date_time: "2025-02-23 12:30 PM"
                }
            ],
            ticket_status: "In Progress",
            created_date_time: "2025-02-23 12:00 PM"
        },
        {
            id: 6,
            uuid: "c67df901",
            student_id: "STU11223",
            ticket_id: "TCKT1006",
            ticket_title: "Playback Speed Issue",
            ticket_message: "The speed control is not working in the video player.",
            messages: [
                {
                    id: 111,
                    uuid: "msg6a",
                    ticket_id: "TCKT1006",
                    student_message: "I can't adjust the playback speed.",
                    message_created_date_time: "2025-02-22 02:00 PM"
                },
                {
                    id: 112,
                    uuid: "msg6b",
                    ticket_id: "TCKT1006",
                    admin_message: "Our team is investigating the issue.",
                    message_created_date_time: "2025-02-22 02:20 PM"
                }
            ],
            ticket_status: "Open",
            created_date_time: "2025-02-22 01:50 PM"
        },
        {
            id: 7,
            uuid: "d89ef234",
            student_id: "STU99876",
            ticket_id: "TCKT1007",
            ticket_title: "Login Required for Video",
            ticket_message: "I am asked to log in again while playing a video.",
            messages: [
                {
                    id: 113,
                    uuid: "msg7a",
                    ticket_id: "TCKT1007",
                    student_message: "The session keeps expiring.",
                    message_created_date_time: "2025-02-21 09:15 AM"
                },
                {
                    id: 114,
                    uuid: "msg7b",
                    ticket_id: "TCKT1007",
                    admin_message: "Please check if cookies are enabled in your browser.",
                    message_created_date_time: "2025-02-21 09:30 AM"
                }
            ],
            ticket_status: "Resolved",
            created_date_time: "2025-02-21 09:00 AM"
        }
    ];
};
