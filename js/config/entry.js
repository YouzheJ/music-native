import React, { Component } from 'react'
import MainPage from '../page/MainPage'
import PlayPage from '../page/PlayPage'
import { StackNavigator } from 'react-navigation'

export default Navigation = StackNavigator({
    Main: { screen: MainPage },
    Play: { screen: PlayPage }
});