import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import SimpleCard from '../Components/HomeMultiCard';
import Checkboxes from '../Components/BasicCheckboxes1';
import CustomizedSnackbars from '../Components/CustomSnack1';
import IconBreadcrumbs from '../Components/IconBreadcrumbs';
import ImageAvatars from '../Components/Avatars';
import TransferList from '../Components/TransferList1';
import SimplePortal from '../Components/SimplePortal1';

export default function Hotels() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            <IconBreadcrumbs/>
            <ImageAvatars/>
            <DatePickers/>
            <SimpleCard/>
            <Checkboxes/>
            <TransferList/>
            <SimplePortal/>
            <CustomizedSnackbars/>
        </Container>
    </React.Fragment>
  );
}