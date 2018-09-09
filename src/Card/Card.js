import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import defaultTheme from 'config/theme'
import PropTypes from 'prop-types'
import toPx from 'utils/shared/toPx'
import toRem from 'utils/shared/toRem'

const SaganCard = styled.div`
    ${context => css`
        word-wrap: break-word;
        margin-bottom: 1rem;
        background-color: #fff;
        border-radius: ${toPx(context.theme.globalBorderRadius || defaultTheme.globals.borderRadius)};
        .card-header {
            background: ${defaultTheme.colors.gray.is200};
            height: ${toPx(context.theme.cardHeaderSize || defaultTheme.card.headerSize)};
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .card-body {
            padding: 1rem;
            .card-icon {
              padding: 1rem 0rem;
            }

            .card-date {
                padding: 1rem 0rem;
                color: ${context.theme.cardDateColor || '#cacaca'};
                font-weight: 300;
                font-size: ${toRem(defaultTheme.font.sizes.sm)};
            }

            .card-title {
                font-size: ${toRem(defaultTheme.font.sizes.xl)};
                font-weight: bold;
                margin-bottom: 1rem;
                /* text-transform: uppercase; */
                display: inline-block;
                white-space: nowrap;
                width: 100%;
                overflow: hidden !important;
                text-overflow: ellipsis;
                color: ${context.theme.cardTitleColor || '#000'}
            }

            .card-content {
                color: ${context.theme.cardContentColor || '#989898'};
                font-weight: 300;
                font-size: ${toRem(defaultTheme.font.sizes.md)};
            }
        }

        .card-footer {
            color: ${context.theme.primaryColor || defaultTheme.colors.primary};
            font-weight: bold;
            font-size: ${toRem(defaultTheme.font.sizes.sm)};
            padding: 1rem;
        }
        
        /* Show card shadow */
        ${context.theme.cardShadow || defaultTheme.card.cardShadow && css`
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
        `}
    `}
`
export class Card extends PureComponent {
  render() {
    const {
      image,
      icon,
      date,
      title,
      content,
      footer,
      headerClass,
      iconClass,
      dateClass,
      titleClass,
      footerClass,
      contentClass
    } = this.props

    return (
      <SaganCard {...this.props}>
        {image ? <div className={'card-header ' + headerClass || ''} style={{ backgroundImage: `url(${image})` }} /> : null}

        <div className='card-body'>
          {icon ? <div className={(iconClass || '') + ' card-icon'}>{icon}</div> : null}

          {date ? <div className={(dateClass || '') + ' card-date'}>
            {date}
          </div> : null}

          {title ? <div className={(titleClass || '') + ' card-title'}>
            {title}
          </div> : null}

          {content ? <div className={(contentClass || '') + ' card-content'}>
            {content}
          </div> : null}
        </div>

        {footer ? <div className={(footerClass || '') + ' card-footer'}>
          {footer}
        </div> : null}
      </SaganCard>
    )
  }
}

Card.propTypes = {
  /** Card image */
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
