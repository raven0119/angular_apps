import {Component} from '@angular/core';

export interface ChatMessage {
  type: number;
  message: string;
}

/**
 * @title Basic cards
 */
@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html',
})
export class CardOverviewExample {
  chatMessages: ChatMessage[] = [
    { type: 0, message: 'Hello' },
    { type: 1, message: 'Hi' },
  ];
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */