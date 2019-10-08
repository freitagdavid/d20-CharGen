import React, { useState } from 'react'
import styled from "styled-components"
import LabelField from './LabelField'

const FiveESheet = props => {
  const [state, setState] = useState({
    characterName: '',
    classLevel: '',
    background: '',
    playerName: '',
    race: '',
    alignment: '',
    exp: '',
    inspiration: 0,
    profenciency: 0,
    stats: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    },
    savingThrows: {
      strength: {
        active: true,
        value: 0
      }
    }
  })

  return (
    <div className={props.className}>
      <fieldset name='generalStats' id="generalStats">
        <LabelField
          fieldName='charName'
          label='Character Name'
          fieldType='text'
          id="charName"
        />
        <label htmlFor='classLevel'>Class & Level</label>
        <fieldset name='classLevel'>
          <input type='text' name='class' />
          <input type='number' name='level' />
        </fieldset>
        <LabelField
          fieldName='background'
          label='Background'
          fieldType='text'
        />
        <LabelField
          fieldName='playername'
          label='Player Name'
          fieldType='text'
        />
        <LabelField fieldName='race' label='Race' fieldType='text' />
        <LabelField fieldName='alignment' label='Alignment' fieldType='text' />
        <LabelField
          fieldName='exp'
          label='Experience Points'
          fieldType='number'
        />
      </fieldset>
      <LabelField fieldName='strength' label='Strength' fieldType='number' />
      <LabelField fieldName='dexterity' label='Dexterity' fieldType='number' />
      <LabelField
        fieldName='constitution'
        label='Constitution'
        fieldType='number'
      />
      <LabelField
        fieldName='intelligence'
        label='Intelligence'
        fieldType='number'
      />
      <LabelField fieldName='wisdom' label='Wisdom' fieldType='number' />
      <LabelField fieldName='charisma' label='Charisma' fieldType='number' />
      <LabelField
        fieldName='inspiration'
        label='Inspiration'
        fieldType='number'
      />
      <LabelField
        fieldName='profenciencyBonus'
        label='Profenciency Bonus'
        fieldType='number'
      />
      <label htmlFor='savingThrows' />
      <fieldset name='savingThrows' />
    </div>
  )
}

const StyledFiveESheet = styled(FiveESheet)`
  width: 90%;
  margin: 0 auto;
  margin-top: 25px;
  display: grid;
  #generalStats {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    #charName {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`

export default StyledFiveESheet
