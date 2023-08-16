import { Component, OnInit } from '@angular/core';

interface Code {
    code: string
}

@Component({
    selector: 'layout-button',
    templateUrl: './layout-button.html'
})
export class layoutButton {
    codes!: Code[];

    selectedCodes!: Code[];

    ngOnInit() {
        this.codes = [
            { code: '12556' },
            { code: '61566' },
            { code: '78266' },
            { code: '97223' },
            { code: '23657' }
        ];
    }

    cars = [
        { label: 'BMW', value: 'bmw' },
        { label: 'Audi', value: 'audi' },
        { label: 'Mercedes', value: 'mercedes' },
    ];

    selectedCars: string[] = [];
}