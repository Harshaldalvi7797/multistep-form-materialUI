import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { Stepper, Step, StepLabel, Typography, Button } from "@material-ui/core"

export default function MultisepForm() {
    function getSteps() {
        return ["SIGN UP", "CHOOSE PLAN", "CHECKOUT"]
    }
    const steps = getSteps()
    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return "step One (SIGN UP)"
            case 1:
                return "step Two (CHOOSE PLAN)"

            case 2:
                return "step Three (CHECKOUT)"
            default:
                return "Unknown step"
        }

    }
    return (
        <div>
            <Stepper>
                {steps.map(label => (
                    <Step>
                        <StepLabel>
                            {label}
                        </StepLabel>
                    </Step>

                ))}
            </Stepper>

        </div>
    )
}
