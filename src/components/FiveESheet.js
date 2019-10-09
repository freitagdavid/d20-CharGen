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
        active: false,
        value: 0
      },
      dexterity: {
        active: false,
        value: 0
      },
      constitution: {
        active: false,
        value: 0
      },
      intelligence: {
        active: false,
        value: 0
      },
      wisdom: {
        active: false,
        value: 0
      },
      charisma: {
        active: false,
        value: 0
      }
    },
    skills: {
      acrobatics: {
        active: false,
        value: 0
      },
      animalHandling: {
        active: false,
        value: 0
      },
      arcane: {
        active: false,
        value: 0
      },
      athletics: {
        active: false,
        value: 0
      },
      deception: {
        active: false,
        value: 0
      },
      history: {
        active: false,
        value: 0
      },
      insight: {
        active: false,
        value: 0
      },
      intimidation: {
        active: false,
        value: 0
      },
      investigation: {
        active: false,
        value: 0
      },
      medicine: {
        active: false,
        value: 0
      },
      nature: {
        active: false,
        value: 0
      },
      perception: {
        active: false,
        value: 0
      },
      performance: {
        active: false,
        value: 0
      },
      persuasion: {
        active: false,
        value: 0
      },
      religion: {
        active: false,
        value: 0
      },
      selightOfHand: {
        active: false,
        value: 0
      },
      stealth: {
        active: false,
        value: 0
      },
      survival: {
        active: false,
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
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`

export default StyledFiveESheet
