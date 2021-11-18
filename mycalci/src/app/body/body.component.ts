import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
	ngOnInit(): void {

	}
	// initializing variables
	subDisplayText = '';
	mainDisplayText = '';
	operand1: number;
	operand2: number;
	operator = '';
	calculationString = '';
	// This string  denotes the operation being performed
	answered = false;
	//  flag to check whether the solution has been processed
	operatorSet = false;
	/**
	 * @description: 
	 */

	pressKey(key: string) {
		if (key === '/' || key === 'x' || key === '-' || key === '+') {
			const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
			if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
				this.operatorSet = true;
			}
			if ((this.operatorSet) || (this.mainDisplayText === '')) {
				return;
			}
			this.operand1 = parseFloat(this.mainDisplayText);
			this.operator = key;
			this.operatorSet = true;
		}
		if (this.mainDisplayText.length === 10) {
			return;
		}
		this.mainDisplayText += key;
	}
	/**
	 * @description:Here this function clears the data in the main dispaly
	 * @author:K.L.SAsanka
	 *
	 */
	allClear() {
		this.mainDisplayText = '';
		this.subDisplayText = '';
		this.operatorSet = false;
	}
	/** 
	 * @description:This will show the output in the main dispaly
	*/
	getAnswer() {
		this.calculationString = this.mainDisplayText;
		this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);
		if (this.operator === '/') {
			this.subDisplayText = this.mainDisplayText;
			this.mainDisplayText = (this.operand1 / this.operand2).toString();
			this.subDisplayText = this.calculationString;
			if (this.mainDisplayText.length > 9) {
				this.mainDisplayText = this.mainDisplayText.substr(0, 9);
			}
		} else if (this.operator === 'x') {
			this.subDisplayText = this.mainDisplayText;
			this.mainDisplayText = (this.operand1 * this.operand2).toString();
			this.subDisplayText = this.calculationString;
			if (this.mainDisplayText.length > 9) {
				this.mainDisplayText = 'ERROR';
				this.subDisplayText = 'Range Exceeded';
			}
		} else if (this.operator === '-') {
			this.subDisplayText = this.mainDisplayText;
			this.mainDisplayText = (this.operand1 - this.operand2).toString();
			this.subDisplayText = this.calculationString;
		} else if (this.operator === '+') {
			this.subDisplayText = this.mainDisplayText;
			this.mainDisplayText = (this.operand1 + this.operand2).toString();
			this.subDisplayText = this.calculationString;
			if (this.mainDisplayText.length > 9) {
				this.mainDisplayText = 'ERROR';
				this.subDisplayText = 'Range Exceeded';
			}
		} else {
			this.subDisplayText = 'ERROR: Invalid Operation';
		}
		this.answered = true;
	}
}


