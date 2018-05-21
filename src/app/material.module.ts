

import { NgModule } from '@angular/core';
import {MatToolbarModule,
          MatIconModule,
            MatButtonModule,
              MatSidenavModule,
                MatExpansionModule,
                  MatListModule, 
                    MatCheckboxModule, 
                      MatDrawerToggleResult,
                      MatFormFieldModule,
                      MatInputModule,
                      MatTabsModule,
                      MatCardModule,
                      MatStepperModule,
                      MatSelectModule,
                      MatDatepickerModule,
                      MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule,
             MatIconModule,
              MatButtonModule,  
                 MatSidenavModule,
                  MatExpansionModule ,
                      MatListModule,
                        MatCheckboxModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatTabsModule,
                        MatCardModule,
                        MatStepperModule,
                        MatSelectModule,
                        MatDatepickerModule,
                        MatNativeDateModule
                          ],

  exports: [MatToolbarModule,
                MatIconModule ,
                    MatButtonModule,
                        MatSidenavModule,
                              MatExpansionModule,
                                  MatListModule,
                                      MatCheckboxModule,
                                      MatFormFieldModule,
                                      MatInputModule,
                                      MatTabsModule,
                                      MatCardModule,
                                      MatStepperModule,
                                      MatSelectModule,
                                      MatDatepickerModule,
                                      MatNativeDateModule
                                      ]
})
export class Material { }
