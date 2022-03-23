// plugin for the learning phase

jsPsych.plugins['IATTestBlock'] = (function() {

	var plugin = {};

	plugin.info = {
        name: 'IATTestBlock',
        parameters: {
            keyPressed: {
                type: jsPsych.plugins.parameterType.STRING,
                default: 'spacebar',
            },
            keyl: {
                type: jsPsych.plugins.parameterType.STRING,
                default: 'e',
            },
            keyr: {
                type: jsPsych.plugins.parameterType.STRING,
                default: 'i',
            },
            niffSide: {
                type: jsPsych.plugins.parameterType.FLOAT,
                default: 1,
            },
            goodSide: {
                type: jsPsych.plugins.parameterType.FLOAT,
                default: 1,
            },
            stimShown: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Stimulus',
                default: ['Test'],
                description: 'Word to be displayed.',
            },
            cat: {
                type: jsPsych.plugins.parameterType.FlOAT,
                pretty_name: 'Category',
                default: 1,
                description: 'Stimulus category to define correct response',
            },
            left_category_label: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Left category label',
                array: true,
                default: ['left'],
                description: 'The label that is associated with the stimulus. Aligned to the left side of page.'
            },
            right_category_label: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Right category label',
                array: true,
                default: ['right'],
                description: 'The label that is associated with the stimulus. Aligned to the right side of the page.'
            },
            left_category_key: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Left category key',
                default: 'E',
                description: 'Key press that is associated with the left category label.'
            },
            right_category_key: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Right category key',
                default: 'I',
                description: 'Key press that is associated with the right category label.'
            },
            bottom_instructions: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Bottom instructions',
                default: '<p>If you press the wrong key, an <span style=\"color: #ff0000\"> X </span> will appear. Press the correct key to continue.</p>',
                description: 'Instructions shown at the bottom of the page.'
            },
            colorStim: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Colour of stimulus',
                default: 'blue',
                description: 'Color of stimuli shown in top corners.',
            },
            dur_max:	{
				type: jsPsych.plugins.parameterType.FLOAT,
				pretty_name: 'max duration of trial',
				default: 30000,
				description: 'trial max duration',
			},
        }
    }


	plugin.trial = function(display_element, trial) {
        console.log("Call trial from our plugin.")


        let total_trial_time = NaN;
        let startTime = NaN;
        let endTime = NaN;
        let choice = NaN;
        let rtToRedCross = NaN;
        let rtToSide = NaN;
        let corr = NaN;
        let wrong = NaN;
        let corrResponse = NaN;


        let color;
        let niffCorrectKey;
        let laapCorrectKey;
        let goodCorrectKey;
        let badCorrectKey;



        // identify correct response to stimulus
        if (trial.niffSide === 1) {
            niffCorrectKey = 69;
            laapCorrectKey = 73;
        } else {
            niffCorrectKey = 73;
            laapCorrectKey = 69;
        }

        if (trial.goodSide === 1) {
            goodCorrectKey = 69;
            badCorrectKey = 73;
        } else {
            goodCorrectKey = 73;
            badCorrectKey = 69;
        }

        // show word and background instructions
        var html_str = "";

        color = "black";
        html_str +=	'<div id="jspsych-reconstruction-stim-container">' +
				'<p style=  "color:' + color + '; text-align: center; font-size:400%; top: -40px">' +
				trial.stimShown +
				'</p>' +
				'</div>'

        color = "red";
            html_str +=	'<div id="jspsych-reconstruction-stim-container">' +
                    '<p style=" visibility: hidden; color:' + color + '; text-align: center; font-size:400%; top: -55px">' +
                    "X" + '</p>' +
                    '</div>'

        html_str += "<div id='trial_left_align' style='position: absolute; top: 18%; left: 20%'>";

        if(trial.left_category_label.length == 1) {
          html_str += "<p>Press " + trial.left_category_key + " for:<br> " +
          trial.left_category_label[0].bold().fontcolor(trial.colorStim) + "</p></div>";
        } else {
          html_str += "<p>Press " + trial.left_category_key + " for:<br> " +
          trial.left_category_label[0].bold().fontcolor('blue') + "<br>" + "or<br>" +
          trial.left_category_label[1].bold().fontcolor('green') + "</p></div>";
        }

        html_str += "<div id='trial_right_align' style='position: absolute; top: 18%; right: 20%'>";

        if(trial.right_category_label.length == 1) {
          html_str += "<p>Press " + trial.right_category_key + " for:<br> " +
          trial.right_category_label[0].bold().fontcolor(trial.colorStim) + '</p></div>';
        } else {
          html_str += "<p>Press " + trial.right_category_key + " for:<br> " +
          trial.right_category_label[0].bold().fontcolor('blue') + "<br>" + "or<br>" +
          trial.right_category_label[1].bold().fontcolor('green') + "</p></div>";
        }


        html_str += "<div id='wrongImgID' style='position:relative; top: 100px; margin-left: auto; margin-right: auto; left: 0; right: 0'>";

        if(trial.display_feedback === true) {
          html_str += "<div id='wrongImgContainer' style='visibility: hidden; position: absolute; top: 90%; margin-left: auto; margin-right: auto; left: 0; right: 0'><p>"+trial.html_when_wrong+"</p></div>";
          html_str += "<div>"+trial.bottom_instructions+"</div>";
        } else {
          html_str += "<div>"+trial.bottom_instructions+"</div>";
        }

        html_str += "</div>";

        display_element.innerHTML = html_str;

        startTime = performance.now();

		let listenerOnRedCrossResponse = null;

		// show red cross if wrong key
		const showRedCross = function () {

            var html_str = "";

            color = "black";
            html_str +=	'<div id="jspsych-reconstruction-stim-container">' +
				'<p style=  "color:' + color + '; text-align: center; font-size:400%; top: -40px">' +
				trial.stimShown +
				'</p>' +
				'</div>'

            color = "red";
            html_str +=	'<div id="jspsych-reconstruction-stim-container">' +
                    '<p style="color:' + color + '; text-align: center; font-size:400%; top: -55px">' +
                    "X" + '</p>' +
                    '</div>'

            html_str += "<div id='trial_left_align' style='position: absolute; top: 18%; left: 20%'>";

            if(trial.left_category_label.length == 1) {
              html_str += "<p>Press " + trial.left_category_key + " for:<br> " +
              trial.left_category_label[0].bold().fontcolor(trial.colorStim) + "</p></div>";
            } else {
              html_str += "<p>Press " + trial.left_category_key + " for:<br> " +
              trial.left_category_label[0].bold().fontcolor('blue') + "<br>" + "or<br>" +
              trial.left_category_label[1].bold().fontcolor('green') + "</p></div>";
            }

            html_str += "<div id='trial_right_align' style='position: absolute; top: 18%; right: 20%'>";

            if(trial.right_category_label.length == 1) {
              html_str += "<p>Press " + trial.right_category_key + " for:<br> " +
              trial.right_category_label[0].bold().fontcolor(trial.colorStim) + '</p></div>';
            } else {
              html_str += "<p>Press " + trial.right_category_key + " for:<br> " +
              trial.right_category_label[0].bold().fontcolor('blue') + "<br>" + "or<br>" +
              trial.right_category_label[1].bold().fontcolor('green') + "</p></div>";
            }

            html_str += "<div id='wrongImgID' style='position:relative; top: 100px; margin-left: auto; margin-right: auto; left: 0; right: 0'>";

            if(trial.display_feedback === true) {
              html_str += "<div id='wrongImgContainer' style='visibility: hidden; position: absolute; top: -75px; margin-left: auto; margin-right: auto; left: 0; right: 0'><p>"+trial.html_when_wrong+"</p></div>";
              html_str += "<div>"+trial.bottom_instructions+"</div>";
            } else {
              html_str += "<div>"+trial.bottom_instructions+"</div>";
            }

            html_str += "</div>";

            display_element.innerHTML = html_str;


		    listenerOnRedCrossResponse = jsPsych.pluginAPI.getKeyboardResponse({
				callback_function: endTrial,
				valid_responses: [corrResponse],
				rt_method: 'performance',
				persist: true,
				allow_held_key: false,
			})
			}

		// first response to word shown in IAT
		const callbackOnSideSelection  = function(info) {
		    rtToSide = performance.now();
		    jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnSideSelection); // clear keyboard response

			console.log('after response to side')
			console.log('get keys', info.key)
			choice = info.key

            switch(trial.cat) {
                case 1:
                    corrResponse = goodCorrectKey;
                    if (choice === goodCorrectKey) {
                        corr = 1;
                    } else {
                        wrong = 1;
                    }
                    break;
			     case 2:
                    corrResponse = badCorrectKey;
                    if (choice === badCorrectKey) {
                        corr = 1;
                    } else {
                        wrong = 1;
                    }
                    break;
                case 3:
                    corrResponse = niffCorrectKey;
                    if (choice === niffCorrectKey) {
                        corr = 1;
                    } else {
                        wrong = 1;
                    }
                    break;
                case 4:
                     corrResponse = laapCorrectKey;
                    if (choice === laapCorrectKey) {
                        corr = 1;
                    } else {
                        wrong = 1;
                    }
                    break;
            }

            if (corr === 1){
                endTrial()
            } else {
                showRedCross()
            }
		}

		// listen for key response to first word shown
		const listenerOnSideSelection = jsPsych.pluginAPI.getKeyboardResponse({
			callback_function: callbackOnSideSelection,
			valid_responses: [trial.keyl, trial.keyr],
			rt_method: 'performance',
			persist: true,
			allow_held_key: false,
		});

		function endTrial() {
            console.log("end trial")
            if (listenerOnSideSelection !== null) {
                jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnSideSelection); // clear keyboard response
            }
            if (listenerOnRedCrossResponse !== null) {
                rtToRedCross = performance.now();
                jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnRedCrossResponse); // clear keyboard response
            }
            // kill any remaining setTimeout handlers:
            jsPsych.pluginAPI.clearAllTimeouts();


            // measure response time
            endTime = performance.now();
            total_trial_time = endTime - startTime;
            console.log(total_trial_time)

            // save data
            var trialData = {
                "categoryShownI": trial.cat,
                "stimShownI": trial.stimShown,
                "niffSideI": trial.niffSide,
                "goodSideI": trial.goodSide,
                "correctResponseI": corrResponse,
                "correctI": corr,
                "choiceI": choice,
                "totalTrialTimeI": total_trial_time,
                "trialStartTimeI": startTime,
                "trialEndTimeI": endTime,
                "rtToSideI": rtToSide,
                "rtToRedCrossI": rtToRedCross,
            };
            jsPsych.finishTrial(trialData);
            saveIATData();
        }


        if (trial.dur_max !== null) {
		    jsPsych.pluginAPI.setTimeout(function() {
		    	if (listenerOnSideSelection !== null) {
				jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnSideSelection); // clear keyboard response
				}
		 		if (listenerOnRedCrossResponse !== null) {
		 		jsPsych.pluginAPI.cancelKeyboardResponse(listenerOnRedCrossResponse); // clear keyboard response
				}

				console.log('timeout')
				display_element.innerHTML = '<div id="jspsych-reconstruction-stim-container"><p style="color:#ff0000;   text-align: center; font-size:200%; line-height: 200%">You are responding too slowly. <br> Please pay attention to the task! <br> If you do not pay attention and respond as accurate as possible the experiment will finish early.</p></div>';
				countTrialTimeouts=countTrialTimeouts+1;
				console.log(countTrialTimeouts)

				setTimeout(()=>{
					if(countTrialTimeouts > 2) {
					    console.log('Experiment should end')
                        saveTaskDataIfAborted()
						jsPsych.endExperiment("Unfortunately, the experiment has finished early as too many of your responses were invalid.")}
					else
					    {endTrial()}
					}, 3000)
		   }, trial.dur_max);
		 }

	};

	return plugin;
})();
