import React, { Component } from 'react';
import { render } from 'react-dom';
import initReactFastclick from 'react-fastclick';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MobileDetect from 'mobile-detect';
import TweenMax from 'gsap';
import _ from 'lodash';
import striptags from 'striptags';
import 'gsap';
import Modernizr from 'modernizr';
import isAbsolutUrl from 'is-absolute-url';
import 'script-loader!bodymovin';
import { Swiper, Slide } from 'react-dynamic-swiper';
import ReactPlayer from 'react-player';

const PIXI = require('pixi.js');
const isMobile = require('ismobilejs');