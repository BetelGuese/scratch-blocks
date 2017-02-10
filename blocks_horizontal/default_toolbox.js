/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
    '<category name="Events">' +
        '<block type="event_whenflagclicked"></block>' +
    '</category>' +
    '<category name="Control">' +
        '<block type="control_forever"></block>' +
        '<block type="control_repeat">' +
        '<value name="TIMES">' +
        '<shadow type="math_whole_number">' +
        '<field name="NUM">4</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="control_wait">' +
        '<value name="DURATION">' +
        '<shadow type="math_positive_number">' +
        '<field name="NUM">1</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
    '</category>' +
    '<category name="Wedo">' +
    '<block type="looks_switchcostumeto">' + 
          '<value name="COSTUME">' +
            '<shadow type="math_positive_number">' +
            '<field name="NUM">99</field>' +
            '</shadow>' +
          '</value>' +
        '</block>' + 
        '<block type="looks_switchbackdropto">' + 
          '<value name="BACKDROP">' +
            '<shadow type="math_positive_number">' +
            '<field name="NUM">99</field>' +
            '</shadow>' +
          '</value>' +
        '</block>' +
        '<block type="motion_turnright">' +
        '<value name="DEGREES">' +
        '<shadow type="math_positive_number">' +
        '<field name="NUM">15</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="motion_turnleft">' +
        '<value name="DEGREES">' +
        '<shadow type="math_positive_number">' +
        '<field name="NUM">15</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="motion_movesteps">' +
        '<value name="STEPS">' +
        '<shadow type="math_number">' +
        '<field name="NUM">10</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="motion_movesteps_back">' +
        '<value name="STEPS">' +
        '<shadow type="math_number">' +
        '<field name="NUM">10</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
         '<block type="sound_play">'+
      '<value name="SOUND_MENU">'+
        '<shadow type="sound_sounds_menu"></shadow>'+
      '</value>'+
    '</block>'+
        '</category>' +
        '</xml>';
        
Blockly.Blocks.defaultToolboxSimple = '<xml id="toolbox-simple" style="display: none">' +
        '<block type="event_whenflagclicked"></block>' +
        '<block type="event_whenbroadcastreceived">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_whenbroadcast">' +
        '<field name="CHOICE">blue</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="event_broadcast">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_broadcast">' +
        '<field name="CHOICE">blue</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="control_forever"></block>' +
        '<block type="control_repeat">' +
        '<value name="TIMES">' +
        '<shadow type="math_whole_number">' +
        '<field name="NUM">4</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="control_stop"></block>' +
        '<block type="control_wait">' +
        '<value name="DURATION">' +
        '<shadow type="math_positive_number">' +
        '<field name="NUM">1</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +

    '</xml>';
