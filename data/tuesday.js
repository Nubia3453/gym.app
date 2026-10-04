// data/tuesday.js

// Ensure the global workout dictionary exists
window.workoutData = window.workoutData || {};

// Register Tuesday (Key: 2)
window.workoutData[2] = {
  day: "Tuesday",
  focus: "Mobility + Cardio",
  
  // Section 1: Aerobic Base & Warm-up
  warmUp: [
    {
      id: "tue_w1",
      name: "Treadmill Brisk Walk",
      notes: "Comfortable brisk walking. You should be able to talk without struggling. Don't turn this into running.",
      images: [
        "https://picsum.photos/400/300?treadmill_walk1",
        "https://picsum.photos/400/300?treadmill_walk2"
      ],
      sets: "1 continuous bout",
      reps: "15–20 mins",
      time: "15–20 min"
    }
  ],

  // Section 2: Dedicated Mobility Circuit
  mainWorkout: [
    {
      id: "tue_m1",
      name: "Cat-Cow Stretch",
      notes: "Move with your breath. Inhale as you drop your belly and lift your chest; exhale as you round your spine.",
      images: [
        "https://picsum.photos/400/300?catcow1",
        "https://picsum.photos/400/300?catcow2"
      ],
      sets: "1–2 sets",
      reps: "8–10 reps",
      time: "2 min"
    },
    {
      id: "tue_m2",
      name: "Thoracic Rotation",
      notes: "From quadruped position, open up through the mid-back and chest without twisting your pelvis.",
      images: [
        "https://picsum.photos/400/300?thoracic1",
        "https://picsum.photos/400/300?thoracic2"
      ],
      sets: "1 set",
      reps: "8 reps / side",
      time: "2 min"
    },
    {
      id: "tue_m3",
      name: "Hip Circles",
      notes: "Perform slow, controlled articular rotations to open up tight hip sockets.",
      images: [
        "https://picsum.photos/400/300?hipcircles1",
        "https://picsum.photos/400/300?hipcircles2"
      ],
      sets: "1 set",
      reps: "10 reps / side",
      time: "2 min"
    },
    {
      id: "tue_m4",
      name: "Bodyweight Squat",
      notes: "Focus on controlled depth and active hip opening at the bottom position.",
      images: [
        "https://picsum.photos/400/300?squat_mob1",
        "https://picsum.photos/400/300?squat_mob2"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "3 min"
    },
    {
      id: "tue_m5",
      name: "World's Greatest Stretch",
      notes: "Step into a deep lunge, drop inside elbow toward the instep, and rotate the chest skyward.",
      images: [
        "https://picsum.photos/400/300?wgs1",
        "https://picsum.photos/400/300?wgs2"
      ],
      sets: "1 set",
      reps: "5 reps / side",
      time: "3 min"
    },
    {
      id: "tue_m6",
      name: "Shoulder Circles",
      notes: "Full controlled rotations: 10 forward, followed immediately by 10 backward.",
      images: [
        "https://picsum.photos/400/300?shcircles1",
        "https://picsum.photos/400/300?shcircles2"
      ],
      sets: "1 set",
      reps: "10 fwd + 10 back",
      time: "1 min"
    },
    {
      id: "tue_m7",
      name: "Ankle Mobility (Wall or Floor Rockers)",
      notes: "Keep your heel firmly glued down while driving your knee forward past the toes.",
      images: [
        "https://picsum.photos/400/300?ankle1",
        "https://picsum.photos/400/300?ankle2"
      ],
      sets: "1 set",
      reps: "10 reps / side",
      time: "2 min"
    }
  ],

  // Section 3: Relaxation & Cooldown
  stretch: [
    {
      id: "tue_s1",
      name: "Slow Stretching & Relaxed Breathing",
      notes: "Focus on long, passive holds and deep diaphragmatic breathing to switch into recovery mode.",
      images: [
        "https://picsum.photos/400/300?relax1",
        "https://picsum.photos/400/300?relax2"
      ],
      sets: "1 sequence",
      reps: "Continuous",
      time: "5–7 min"
    }
  ]
};