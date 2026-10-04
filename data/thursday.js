// data/thursday.js

// Ensure the master workout data registry exists
window.workoutData = window.workoutData || {};

// Register Thursday (Key: 4)
window.workoutData[4] = {
  day: "Thursday",
  focus: "Mobility + Conditioning",

  // Section 1: Aerobic Conditioning (20 min)
  warmUp: [
    {
      id: "thu_w1",
      name: "Treadmill Paced Walk",
      notes: "Pacing breakdown: 5 min easy walk -> 10 min brisk walk -> 5 min easy walk. Keep it smooth and continuous.",
      images: [
        "https://picsum.photos/400/300?treadmill_thu1",
        "https://picsum.photos/400/300?treadmill_thu2"
      ],
      sets: "1 session",
      reps: "20 min total",
      time: "20 min"
    }
  ],

  // Section 2: Dedicated Mobility Circuit (~15 min)
  mainWorkout: [
    {
      id: "thu_m1",
      name: "Cat-Cow",
      notes: "Move gently with your breath. Inhale on belly drop, exhale on back rounding.",
      images: [
        "https://picsum.photos/400/300?catcow_thu1",
        "https://picsum.photos/400/300?catcow_thu2"
      ],
      sets: "1 set",
      reps: "8 reps",
      time: "2 min"
    },
    {
      id: "thu_m2",
      name: "Thoracic Rotation",
      notes: "Open from the upper and mid-back while keeping the hips square.",
      images: [
        "https://picsum.photos/400/300?thoracic_thu1",
        "https://picsum.photos/400/300?thoracic_thu2"
      ],
      sets: "1 set",
      reps: "8 reps / side",
      time: "2 min"
    },
    {
      id: "thu_m3",
      name: "Hip Flexor Stretch",
      notes: "Half-kneeling position. Tuck your tailbone slightly and lean forward gently into the front hip.",
      images: [
        "https://picsum.photos/400/300?hipstretch_thu1",
        "https://picsum.photos/400/300?hipstretch_thu2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "2 min"
    },
    {
      id: "thu_m4",
      name: "Hamstring Stretch",
      notes: "Keep your spine long and hinge at the hips; do not force the stretch.",
      images: [
        "https://picsum.photos/400/300?hamstretch_thu1",
        "https://picsum.photos/400/300?hamstretch_thu2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "2 min"
    },
    {
      id: "thu_m5",
      name: "Chest Stretch",
      notes: "Place forearm against a wall or doorway, gently turn torso away to open pecs.",
      images: [
        "https://picsum.photos/400/300?pecstretch_thu1",
        "https://picsum.photos/400/300?pecstretch_thu2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "2 min"
    },
    {
      id: "thu_m6",
      name: "Calf Stretch",
      notes: "Step back and press your rear heel into the floor with a straight knee.",
      images: [
        "https://picsum.photos/400/300?calfstretch_thu1",
        "https://picsum.photos/400/300?calfstretch_thu2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "2 min"
    },
    {
      id: "thu_m7",
      name: "Deep Bodyweight Squat Hold",
      notes: "Sink into a deep squat, use elbows to gently push knees out, and keep chest up.",
      images: [
        "https://picsum.photos/400/300?squathold_thu1",
        "https://picsum.photos/400/300?squathold_thu2"
      ],
      sets: "2 sets",
      reps: "20–30s hold",
      time: "2 min"
    }
  ],

  // Section 3: Recovery & Cooldown (5 min)
  stretch: [
    {
      id: "thu_s1",
      name: "Slow Breathing + Gentle Stretching",
      notes: "Lie back or sit comfortably. Take long, deep diaphragmatic breaths to downregulate your nervous system.",
      images: [
        "https://picsum.photos/400/300?relax_thu1",
        "https://picsum.photos/400/300?relax_thu2"
      ],
      sets: "1 session",
      reps: "Continuous",
      time: "5 min"
    }
  ]
};