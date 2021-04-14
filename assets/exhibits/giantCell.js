export default {
  heroImage: require('../images/hero/giantCell.jpg'),
  heroImageAlt:'Large, walk-in cell showing 3d representations of different parts of a cell.',
  audioFile: require('../audio/giantcell.mp3'),
  location: '2nd Floor',
  title: 'Giant Cell',
  subtitle: 'The Building Blocks of Life',
  blurb: `Your body has about 37 trillion cells! Cells are responsible for your physical appearance, harvesting energy from the food you eat, and a host of other specialized functions. Our Giant Cell uses audio, video, text, and three-dimensional sculpture to bring the microscopic into view. Take a closer look!`,
  fullText: `While cells are tiny, usually only visible using the aid of a microscope, they are composed of even smaller structures called organelles. Each organelle has a specific task that keeps the cell functioning properly. Our Giant Cell displays the following organelles:

the Mitochondrion, the Golgi apparatus, the cell membrane, the ribosome, the endoplasmic reticulum, the nucleus, the lysosome, and the cytoskeleton. Each organelle is important.
Visit each of them to learn more!

The cell also contains DNA, which is the hereditary material. It is responsible for the way someone (or something) looks, grows, heals and maintains its health. Did you know that the sequence of building blocks of DNA (known as bases) is 99% the same in all people? Their order only differs slightly, giving us each our unique appearance!
`,
  tlas: [
    {
      q: `Find the spherical nucleus in the Giant Cell. What are the squiggly bits contained inside?`,
      a: `These are strands of DNA. In almost all living things except bacteria and archaea, the DNA are packed tightly together in chromosomes and located in the nucleus of a cell.`
    },
    {
      q: `While the exterior of our Giant Cell is made of fabric and purely decorative, what role does a real cell’s membrane perform?`,
      a: `In a real cell, the membrane acts as a barrier. It brings in nutrients and lets waste materials out. It also regulates interactions between the cell and its environment.`
    },
    {
      q: `How do cells get the power they need?`,
      a: `Most cells contain an organelle called a Mitochondrion. The mitochondrion takes the energy available in sugars and converts it to energy usable by the cell. Find one near the entrance to the Giant Cell!`
    }
  ],

  gallery: [
    {
      imageFile: require('../images/gallery/giantCell/giantCell_01.jpg'),
      imageDescription: 'What the home of the Giant Cell looked like when it was just forming.',
    },
    {
      imageFile: require('../images/gallery/giantCell/giantCell_02.jpg'),
      imageDescription: 'Ensuring that the cell structure is stable.',
    },
    {
      imageFile: require('../images/gallery/giantCell/giantCell_03.jpg'),
      imageDescription: 'Watching other cells form - a view from the nucleus.',
    },
    {
      imageFile: require('../images/gallery/giantCell/giantCell_04.jpg'),
      imageDescription: 'Our Giant Cell is so big, we need help reaching the top.',
    },
  ],
  whileYoureHere: [
    {
      title: 'Investigate Lab: Micro Worlds',
      description: 'The Micro Worlds lab is an interactive space where scientific tools can be used to explore topics such as the biodiversity of microscopic organisms, cells, genetics, and developmental biology. You’ll find activities appropriate for ages 5 to 105!'
    },
    {
      title: 'Interactive Displays',
      description: 'Explore the interactive displays that are present throughout the gallery to learn more about DNA, proteins, and genetics!'
    }
  ],
}
