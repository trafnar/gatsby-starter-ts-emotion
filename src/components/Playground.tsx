import React from "react"
import { css } from "@emotion/core"

export const Playground = () => {
  const styles = css`
    font-family: sans-serif;
    color: red;
  `
  return <div css={styles}>Hello From Playground</div>
}
