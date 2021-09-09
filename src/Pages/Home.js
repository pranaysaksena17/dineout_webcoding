import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Button1';
import MaterialUIPickers from '../Components/D&TPicker1';
import FloatingActionButtons from '../Components/Float1';
import SimpleBottomNavigation from '../Components/BottomNav1';
import BasicButtonGroup from '../Components/BasicButtonGroup';
import DelayingAppearance from '../Components/DelayApp';
import DetailedAccordion from '../Components/Accordian1';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            <DatePickers/>
            <ContainedButtons/>
            <FloatingActionButtons/>
            <BasicButtonGroup/>
            <MaterialUIPickers/>
            <DetailedAccordion/>
            <DelayingAppearance/>
            <SimpleBottomNavigation/>
        </Container>
    </React.Fragment>
  );
}