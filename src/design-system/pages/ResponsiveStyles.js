import React from "react";
import Box from "../components/layout/Box";

const Page = () => (
  <div>
    <h1>Responsive styles</h1>
    <p>
      Often when working on responsive layouts, it's useful to adjust styles
      along a singular dimension – such as font-size, margin, padding, and
      width. Instead of manually managing media queries and adding nested style
      objects throughout a code base, styled-system offers a convenient
      shorthand syntax for adding responsive styles with a mobile-first
      approach. While this syntax can seem odd at first, it can become a
      powerful way to manage responsive typography and layouts.
    </p>
    <p>
      The following components should take 100% of the width on mobile,
      otherwise they should only take 50% each
    </p>
    <Box width={[1, 1 / 2]} backgroundColor="red">
      Component 1
    </Box>
    <Box width={[1, 1 / 2]} backgroundColor="blue">
      Component 2
    </Box>

    <h2>Tasks</h2>
    <h3>Task 1</h3>

    <p>
      The following components should behave like the previous one except that
      they should only display their background color on mobile:
    </p>
    <Box width={[1, 1 / 2]} backgroundColor="red">
      Component 1
    </Box>
    <Box width={[1, 1 / 2]} backgroundColor="blue">
      Component 2
    </Box>
  </div>
);

export default Page;
