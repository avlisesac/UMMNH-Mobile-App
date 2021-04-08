import * as exhibits from '../exhibits'

export default {
  nav1: {
    title: 'Find: The Mastodons',
    subtitle: '1st Floor - Main Atrium',
    blurb: `Enter the museum through the main entrance. You will know you're at the right door if you walk between two Pumas. The mastodons are in the main atrium across from the information desk.`,
    images: [
      {
        image: require('../images/nav/nav1a.jpg'),
        description: 'Navigation arrow pointing towards the front door between two puma statues.'
      },
      {
        image: require('../images/nav/nav1b.jpg'),
        description: 'Navigation arrow pointing toward the mastodon skeleton through the entry doors.'
      }
    ],
    next: 'Stop: 1/7',
  },
  nav2: {
    title: 'Find: Michigan Rivers',
    subtitle: '1st Floor - Exploring Michigan Gallery',
    blurb: `From the mastodons, turn right and go down the hallway. Once you pass the museum store, turn left and you will see the entrance to the Exploring Michigan gallery. You will find the Michigan Rivers diorama on the opposite wall, a large cottonwood tree and black bear are both easily visible.`,
    images: [
      {
        image: require('../images/nav/nav2a.jpg'),
        description: 'Navigation arrow pointing down the hallway from the mastodons.'
      },
      {
        image: require('../images/nav/nav2b.jpg'),
        description: 'Navigation arrow pointing at the back wall of the Exploring Michigan gallery.'
      }
    ],
    next: 'Stop: 2/7',
  },
  nav3: {
    title: 'Find: Giant Cell',
    subtitle: '2nd Floor - Under the Microscope Gallery',
    blurb: `Exit the Exploring Michigan gallery from the left-hand door and take the elevator at the end of the hall up to the second floor. Upon exiting, follow the hall to the left and enter the Under the Microscope gallery ahead. You will see the Giant Cell filling the center of the gallery.`,
    images: [
      {
        image: require('../images/nav/nav3a.jpg'),
        description: 'Navigation arrow pointing to the first floor elevator.'
      },
      {
        image: require('../images/nav/nav3b.jpg'),
        description: 'Navigation arrow pointing down the second floor hallway towards the Under the Microscope gallery.'
      }
    ],
    next: 'Stop: 3/7',
  },
  nav4: {
    title: 'Find: Majungasaurus',
    subtitle: '2nd Floor - Evolution Gallery',
    blurb: `Exit the Under the Microscope gallery on the opposite side and enter the Evolution gallery ahead. Using the numbered ‘Mass Extinction Pillars’ as a guide, continue until you pass pillar #4. When you do, you will see *Majungasaurus* looming down from above on the left.`,
    images: [
      {
        image: require('../images/nav/nav4a.jpg'),
        description: 'Navigation arrow pointing to the entrance to the Evolution gallery.'
      },
      {
        image: require('../images/nav/nav4b.jpg'),
        description: 'Navigation arrow pointing to the back corner of the Evolution gallery.'
      }
    ],
    next: 'Stop: 4/7',
  },
  nav5: {
    title: 'Find: Quetzalcoatlus',
    subtitle: '2nd Floor - West Atrium',
    blurb: `Continue through the Evolution gallery until you exit on the other side. When you come out to the atrium overlook, you will see *Quetzalcoatlus* soaring through the air above.`,
    images: [
      {
        image: require('../images/nav/nav5a.jpg'),
        description: 'Navigation arrow pointing towards the exit of the Evolution gallery.'
      },
      {
        image: require('../images/nav/nav5b.jpg'),
        description: 'Navigation arrow pointing to the 2nd floor landing.'
      }
    ],
    next: 'Stop: 5/7',
  },
  nav6: {
    title: 'Find: Dynamic Planet',
    subtitle: '2nd Floor - West Wing',
    blurb: `Continue along the pathway that surrounds the West Atrium. When you get to the other side, you will see the entrance to Dynamic Planet.`,
    images: [
      {
        image: require('../images/nav/nav6a.jpg'),
        description: 'Navigation arrow curving along the 2nd floor landing.'
      },
      {
        image: require('../images/nav/nav6b.jpg'),
        description: 'Navigation arrow pointing into the Dynamic Planet gallery.'
      }
    ],
    next: 'Stop: 6/7',
  },
  nav7: {
    title: 'Find: Bristle Mammoth',
    subtitle: 'Lower Level - People and the Planet Gallery',
    blurb: `Exiting Dynamic Planet, pass back through the Under the Microscope gallery to take the elevator down to the Lower Lobby. From here, enter the People and the Planet gallery using the right-hand door. Upon entering, take a sharp left from the welcoming wolf to find the Bristle Mammoth.`,
    images: [
      {
        image: require('../images/nav/nav7a.jpg'),
        description: 'Navigation arrow pointing back through the Under the Microscope gallery.'
      },
      {
        image: require('../images/nav/nav7b.jpg'),
        description: 'Navigation arrow pointing down the lower level hallway to the People and the Planet gallery.'
      }
    ],
    next: 'Stop: 7/7',
  },
}
