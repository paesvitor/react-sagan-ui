import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import defaultTheme from 'config/theme'
import PropTypes from 'prop-types'
import toPx from 'utils/shared/toPx'

const SaganCard = styled.div`
    ${context => css`
        word-wrap: break-word;
        margin-bottom: 15px;
        background-color: #fff;
        border-radius: ${toPx(context.theme.globalBorderRadius || defaultTheme.global.borderRadius)};
        .card-header {
            background: ${defaultTheme.colors.gray.is200};
            height: ${toPx(context.theme.cardHeaderSize || defaultTheme.card.headerSize)};
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .card-body {
            padding: 15px;
            .card-date {
                padding: 15px 0px;
                color: ${context.theme.cardDateColor || defaultTheme.colors.gray.is500};
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
                color: ${context.theme.cardTitleColor || defaultTheme.card.titleColor}
            }

            .card-content {
                color: ${context.theme.cardContentColor || defaultTheme.colors.gray.is700};
                font-weight: 300;
                font-size: 14px;
            }
        }

        .card-footer {
            color: ${context.theme.primaryColor || defaultTheme.colors.primary};
            font-weight: bold;
            font-size: 13px;
            padding: 15px;
        }
        
        /* Show card shadow */
        ${context.theme.cardShadow || defaultTheme.card.cardShadow && css`
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
        `}

        ${console.log(context)}
    `}
`
export class Card extends PureComponent {
  render() {
    const { image, date, title, content, footer } = this.props

    return (
      <SaganCard {...this.props}>
        {image ? <div className='card-header' style={{backgroundImage: `url(${image})`}} /> : null}

        <div className='card-body'>
          {date ? <div className='card-date'>
            {date}
          </div> : null}

          {title ? <div className='card-title'>
            {title}
          </div> : null}

          {content ? <div className='card-content'>
            {content}
          </div> : null}
        </div>

        {footer ? <div className='card-footer'>
          {footer}
        </div> : null}
      </SaganCard>
    )
  }
}

Card.propTypes = {
  /** If empty, will not display anything */
  image: PropTypes.string,
  /** Card date */
  date: PropTypes.string,
  /** Card title */
  title: PropTypes.string,
  /** Card content */
  content: PropTypes.string,
  /** Card footer, can be anything <Button/> */
  footer: PropTypes.node
}

Card.defaultProps = {
}

export default Card
