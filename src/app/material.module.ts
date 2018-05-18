

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
                      MatCardModule} from '@angular/material';

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
                        MatCardModule
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
                                      MatCardModule
                                      ]
})
export class Material { }
