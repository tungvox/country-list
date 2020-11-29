import React from 'react'
import { useParams } from 'react-router-dom'
import { Image, Card, Icon } from 'semantic-ui-react'

import { RoutesProps } from '../../types/index'
import './Product.scss'

export default function Product({ countries }: RoutesProps) {
  const { name } = useParams()

  // const product = useSelector((state: AppState) =>
  //   state.product.inCart.find(p => p.id === id))

  // if (!product) {
  //   return <div>Product not found</div>
  // }

  const country = countries.find((c: any) => c.name === name)

  if (!country) {
    return <div>Product not found</div>
  }

  return (
    <div className="single-country">
      <Card>
        <Image src={country.flag} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{country.name}</Card.Header>
          <Card.Meta>
            <span className="date">Region: {country.region}</span>
          </Card.Meta>
          <Card.Description>
            Languages:
            <td className="align-middle">
              {country.languages.map((lang: any) => {
                return (
                  <li className="languages" key={lang.name}>
                    {lang.name}
                  </li>
                )
              })}
            </td>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Population:{' '}
          {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Card.Content>
      </Card>
    </div>
  )
}
