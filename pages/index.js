import { css } from 'astroturf'
import styled from 'astroturf/react'

import { dark } from '../theme'

const styles = css`
  .red {
    border: 2px solid ${dark};
    padding: 10px;
  }
`

console.log('>>>', styles)

const Button = styled('button')`
  color: black;
  border: 1px solid black;
  background-color: white;

  &.primary {
    color: blue;
    border: 1px solid blue;
  }

  &.color-green {
    color: green;
  }
`

console.log('>>> Button', Button)

const IndexPage = () => (
  <div className={styles.red}>
    <Button primary color="green">
      A styled button
    </Button>
  </div>
)

export default IndexPage
