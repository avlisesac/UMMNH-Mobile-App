export default {
  heroImage: require('../images/hero/treeoflife.png'),
  heroImageAlt:`Picture of multicolored cylinders nested inside rings that hang from the ceiling of the exhibit.`,
  audioFile: require('../audio/treeoflife.mp3'),
  location: '2nd Floor',
  title: 'Tree of Life',
  subtitle: 'Our Shared History',
  blurb: `The evolutionary Tree of Life is a visual representation of how all things are related through shared ancestry. Using the table, the interactive touch-screen, and the display case, you can go back in time and learn about your evolutionary family tree!`,
  fullText: `Everything currently alive shares a common ancestor that lived between 3.5 and 4.2 billion years ago. Scientists refer to this root on the Tree of Life as “LUCA”, which stands for “Last Universal Common Ancestor.” There may have been other things living at the same time as LUCA and even long before, but only LUCA’s descendants survived. All other branches were dead ends and aren’t shown in this tree.

	This evolutionary Tree of Life diagram helps to visualize how life has evolved from LUCA to current life on Earth. The 200,000 species on this tree represent a tiny fraction of the whole evolutionary family tree, but they illustrate the extreme diversity that arose through natural evolutionary processes. Although all the plants and animals that exist on Earth may be wildly different and incredibly diverse, we are all related—we all evolved from the same original ancestor. Thanks, LUCA!
`,
  tlas: [
    {
      q: `Can you find a time in history that we had a shared ancestor with a ladybug?`,
      a: `If you follow the blue line from the ladybug to where it connects with the red line of the human, you can see that around 750 million years ago, humans and ladybugs had a common ancestor.`
    },
    {
      q: `How many branches do you think are on the Tree of Life?`,
      a: `The Tree of Life here at the Museum depicts about 200,000 branches! While that might seem like a lot, it’s just a very small portion of what is really represented on the whole Tree of Life.`
    },
    {
      q: `When did most of the biological diversity in history occur?`,
      a: `Looking at the rings of time, we can see that most of the biological diversity that currently exists formed over the last 500 million years!`
    }
  ],

  gallery: [
    {
      imageFile: require('../images/gallery/treeoflife/TreeOfLife_01.png'),
      imageDescription: `Installing illustrations in the Tree of Life exhibit.`,
    },
    {
      imageFile: require('../images/gallery/treeoflife/TreeOfLife_02.png'),
      imageDescription: `The Tree of Life display case.`,
    },
    {
      imageFile: require('../images/gallery/treeoflife/TreeOfLife_03.png'),
      imageDescription: `Our table that shows 200,000 branches on the evolutionary Tree of Life.`,
    },
    {
      imageFile: require('../images/gallery/treeoflife/TreeOfLife_04.png'),
      imageDescription: `A close up shot of the piece above our Tree of Life table that is a symbolic representation of the 'branches' of the tree of life.`,
    },
  ],
}
