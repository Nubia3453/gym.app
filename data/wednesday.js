// data/wednesday.js

// Ensure the global workout dictionary exists
window.workoutData = window.workoutData || {};

// Register Wednesday (Key: 3)
window.workoutData[3] = {
  day: "Wednesday",
  focus: "Strength B",

  // Section 1: Dynamic Warm-up (6 min)
  warmUp: [
    {
      id: "wed_w1",
      name: "Treadmill Walk",
      notes: "4 min brisk walk + 2 min slightly faster. Get the blood moving without fatiguing yourself.",
      images: [
        "https://picsum.photos/400/300?treadmill3a",
        "https://picsum.photos/400/300?treadmill3b"
      ],
      sets: "1 set",
      reps: "6 min total",
      time: "6 min"
    },
    {
      id: "wed_w2",
      name: "Arm Circles",
      notes: "10 forward, 10 backward.",
      images: [
        "https://picsum.photos/400/300?armcircles3a",
        "https://picsum.photos/400/300?armcircles3b"
      ],
      sets: "1 set",
      reps: "10 each direction",
      time: "1 min"
    },
    {
      id: "wed_w3",
      name: "Bodyweight Squats",
      notes: "Mobilize knees, ankles, and hips.",
      images: [
        "https://picsum.photos/400/300?squats3a",
        "https://picsum.photos/400/300?squats3b"
      ],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "wed_w4",
      name: "Shoulder Rolls",
      notes: "10 slow, controlled rolls.",
      images: [
        "https://picsum.photos/400/300?shoulders3a",
        "https://picsum.photos/400/300?shoulders3b"
      ],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "wed_w5",
      name: "Hip Rotations",
      notes: "Loosen the hips and lower back.",
      images: [
        "https://picsum.photos/400/300?hiprot3a",
        "https://picsum.photos/400/300?hiprot3b"
      ],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    }
  ],

  // Section 2: Main Compound Strength Exercises
  mainWorkout: [
    {
      id: "wed_m1",
      name: "Goblet Squat",
      notes: "Use a light dumbbell held at your chest. If uncomfortable, substitute with the Leg Press instead.",
      images: [
        "https://picsum.photos/400/300?goblet1",
        "https://picsum.photos/400/300?goblet2"
      ],
      sets: "3 sets",
      reps: "10 reps",
      time: "8 min"
    },
    {
      id: "wed_m2",
      name: "Seated Cable Row",
      notes: "Rest: 60–75s. Keep tall posture and draw your shoulder blades back without swinging.",
      images: [
        "https://picsum.photos/400/300?cablerow_w1",
        "https://picsum.photos/400/300?cablerow_w2"
      ],
      sets: "3 sets",
      reps: "10 reps",
      time: "7 min"
    },
    {
      id: "wed_m3",
      name: "Shoulder Press Machine",
      notes: "Rest: 60s. Press smoothly overhead. Don't force heavy weight here.",
      images: [
        "https://picsum.photos/400/300?shpress1",
        "https://picsum.photos/400/300?shpress2"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "wed_m4",
      name: "Leg Extension",
      notes: "Smooth and controlled tempo. Pause for half a second at full contraction.",
      images: [
        "https://picsum.photos/400/300?legext1",
        "https://picsum.photos/400/300?legext2"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "wed_m5",
      name: "Lat Pulldown",
      notes: "Moderate weight. Drive your elbows downward toward the floor.",
      images: [
        "https://picsum.photos/400/300?latpull_w1",
        "https://picsum.photos/400/300?latpull_w2"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "wed_m6",
      name: "Dumbbell Romanian Deadlift (RDL)",
      notes: "Light dumbbells. Push your hips backward rather than rounding your back. If unsure of form, substitute with seated or lying leg curls.",
      images: [
        "https://picsum.photos/400/300?rdl1",
        "https://picsum.photos/400/300?rdl2"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "6 min"
    },
    {
      id: "wed_m7",
      name: "Dead Bug",
      notes: "Slow and controlled. Keep your lower back pressed flush into the floor as opposite arm and leg extend.",
      images: [
        "https://picsum.photos/400/300?deadbug1",
        "https://picsum.photos/400/300?deadbug2"
      ],
      sets: "2 sets",
      reps: "8 reps / side",
      time: "4 min"
    }
  ],

  // Section 3: Cool-Down Stretches (5 min)
  stretch: [
    {
      id: "wed_s1",
      name: "Chest Stretch",
      notes: "Gentle stretch across pecs and front shoulders.",
      images: [
        "https://picsum.photos/400/300?pecstretch_w1",
        "https://picsum.photos/400/300?pecstretch_w2"
      ],
      sets: "1 set",
      reps: "30s hold",
      time: "1 min"
    },
    {
      id: "wed_s2",
      name: "Lat / Back Stretch",
      notes: "Lengthen along the ribcage and mid-back.",
      images: [
        "https://picsum.photos/400/300?latstretch_w1",
        "https://picsum.photos/400/300?latstretch_w2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "wed_s3",
      name: "Hip Flexor Stretch",
      notes: "Relieve tension in the front hips after squats and hinges.",
      images: [
        "https://picsum.photos/400/300?hipstretch_w1",
        "https://picsum.photos/400/300?hipstretch_w2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "wed_s4",
      name: "Hamstring Stretch",
      notes: "Gentle stretch to release hamstrings after RDLs.",
      images: [
        "https://picsum.photos/400/300?hamstretch_w1",
        "https://picsum.photos/400/300?hamstretch_w2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "wed_s5",
      name: "Quad Stretch",
      notes: "Keep knees aligned side by side.",
      images: [
        "https://picsum.photos/400/300?quadstretch_w1",
        "https://picsum.photos/400/300?quadstretch_w2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "wed_s6",
      name: "Calf Stretch",
      notes: "Gently press heel toward the floor.",
      images: [
        "https://picsum.photos/400/300?calfstretch_w1",
        "https://picsum.photos/400/300?calfstretch_w2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    }
  ]
};