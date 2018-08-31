import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import defaultTheme from '../config/theme'
import PropTypes from 'prop-types'

const SaganCard = styled.div`
    ${context => css`
        word-wrap: break-word;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
        margin-bottom: 15px;
        .card-header {
            background: ${defaultTheme.colors.gray.is200};
            height: 190px;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .card-body {
            padding: 15px;
            .card-date {
                padding: 15px 0px;
                color: ${defaultTheme.colors.gray.is500};
                font-weight: 300;
                font-size: 12px;
            }

            .card-title {
                font-size: 27px;
                font-weight: bold;
                margin-bottom: 15px;
                /* text-transform: uppercase; */
                display: inline-block;
                white-space: nowrap;
                width: 100%;
                overflow: hidden !important;
                text-overflow: ellipsis;
            }

            .card-content {
                color: ${defaultTheme.colors.gray.is700};
                font-weight: 300;
                font-size: 14px;
            }
        }

        .card-footer {
            margin-top: 15px;
            color: ${context.theme.primaryColor || defaultTheme.colors.primary};
            font-weight: bold;
            font-size: 13px;
            padding: 15px;
        }
    `}
`
export class Card extends PureComponent {
  render() {
    const { image, date, title, content, footer } = this.props

    return (
      <SaganCard>
        {image ? <div className='card-header' style={{backgroundImage: `url(${image})`}} /> : null}

        <div className='card-body'>
          <div className='card-date'>
            {date}
          </div>

          <div className='card-title'>
            {title}
          </div>

          <div className='card-content'>
            {content}
          </div>
        </div>

        <div className='card-footer'>
          {footer}
        </div>
      </SaganCard>
    )
  }
}

Card.propTypes = {
  image: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  footer: PropTypes.node
}

export default Card
