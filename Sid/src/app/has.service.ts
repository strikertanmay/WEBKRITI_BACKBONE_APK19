import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { identifier } from 'babel-types';

@Injectable({
  providedIn: 'root'
})
export class HasService {
  constructor(private apollo: Apollo) {}

  add(number: any, phone: any, location: any, name: any) {
    return this.apollo
      .mutate<any>({
        mutation: gql`
          mutation($objects: [ambulances_insert_input!]!) {
            insert_ambulances(objects: $objects) {
              affected_rows
              returning {
                id
                location
                ambulance_number
                driver_name
                phone_number
                edit
              }
            }
          }
        `,
        variables: {
          objects: [
            {
              ambulance_number: number,
              driver_name: name,
              location: location,
              phone_number: phone
            }
          ]
        }
      })
      .pipe(take(1))
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  update(number: any, phone: any, location: any, name: any, idt: any) {
    return this.apollo
      .mutate<any>({
        mutation: gql`
          mutation($id: Int!, $objects: ambulances_set_input) {
            update_ambulances(where: { id: { _eq: $id } }, _set: $objects) {
              affected_rows
              returning {
                id
                location
                ambulance_number
                driver_name
                phone_number
                edit
              }
            }
          }
        `,
        variables: {
          id: idt,
          objects: {
            ambulance_number: number,
            driver_name: name,
            location: location,
            phone_number: phone
          }
        }
      })
      .pipe(take(1))
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getAmb() {
    return this.apollo
      .watchQuery<any>({
        query: gql`
          query getamb {
            ambulances {
              id
              location
              driver_name
              ambulance_number
              phone_number
              edit
            }
          }
        `
      })
      .valueChanges.pipe(take(1))
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  deleteAmb(id: any) {
    return this.apollo
      .mutate<any>({
        mutation: gql`
          mutation($id: Int!) {
            delete_ambulances(where: { id: { _eq: $id } }) {
              affected_rows
              returning {
                id
              }
            }
          }
        `,
        variables: {
          id: id
        }
      })
      .pipe(take(1))
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  isModerator() {
    return this.apollo
      .watchQuery<any>({
        query: gql`
          query check($username: String!) {
            moderators(where: { moderator_id: { _eq: $username } }) {
              id
            }
          }
        `,
        variables: {
          username: localStorage.getItem('user_id')
        }
      })
      .valueChanges.pipe(take(1))
      .pipe(
        map((res: any) => {
          console.log(res);

          return res;
        })
      );
  }
}
