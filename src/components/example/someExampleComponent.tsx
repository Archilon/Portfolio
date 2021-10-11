import React from 'react'
import styles from './someExampleComponent.module.scss'

type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
    <div>
      <div className={styles.container}>
          <h1>Header</h1>
        <p>My supercool component</p>
      </div>
    </div>
  )
}

export default SomeExampleComponent
