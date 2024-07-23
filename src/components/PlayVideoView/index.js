import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  VideoContentContainer,
  ReactVideoPlayer,
  VideoItemHeading,
  VideoItemDescriptionContainer,
  ViewsAndDateContainer,
  ViewsCount,
  PublishedAt,
  LikesAndSaveContainer,
  EventButton,
  ButtonText,
  Divider,
  CommentContainer,
  CommentProfileImg,
  CommentDetailsContainer,
  CommentChannelName,
  SubscriberCount,
  Comment,
} from './styledComponents'

const PlayVideoView = props => {
  const {
    details,
    onClickLikeBtn,
    onClickDislikeBtn,
    isLiked,
    isDisliked,
  } = props

  const {
    channel,
    description,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    videoUrl,
    viewCount,
  } = details
  const {name, profileImageUrl, subscriberCount} = channel

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {addToSavedVideos, savedVideos, isDarkTheme} = value
        const index = savedVideos.findIndex(eachVideo => eachVideo.id === id)
        let isSaved
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = 'true'
        }
        return (
          <VideoContentContainer
            isDarkTheme={isDarkTheme}
            data-testid="videoItemDetails"
          >
            <ReactVideoPlayer
              url={videoUrl}
              height={500}
              width={1120}
              controls
            />
            <VideoItemHeading isDarkTheme={isDarkTheme}>
              {title}
            </VideoItemHeading>
            <VideoItemDescriptionContainer>
              <ViewsAndDateContainer>
                <ViewsCount>{viewCount} views</ViewsCount>
                <BsDot size={20} />
                <PublishedAt>{publishedAt}</PublishedAt>
              </ViewsAndDateContainer>

              <LikesAndSaveContainer>
                <EventButton onClick={() => onClickLikeBtn()}>
                  <BiLike
                    size={20}
                    color={isLiked ? ' #2563eb ' : '#64748b '}
                  />
                  <ButtonText color={isLiked ? ' #2563eb ' : '#64748b '}>
                    Like
                  </ButtonText>
                </EventButton>

                <EventButton onClick={() => onClickDislikeBtn()}>
                  <BiDislike
                    size={20}
                    color={isDisliked ? ' #4f46e5' : '#64748b'}
                  />
                  <ButtonText color={isDisliked ? ' #4f46e5' : '#64748b'}>
                    Dislike
                  </ButtonText>
                </EventButton>

                <EventButton onClick={() => addToSavedVideos(details)}>
                  <RiPlayListAddLine
                    size={20}
                    color={isSaved ? ' #4f46e5' : '#64748b'}
                  />
                  <ButtonText color={isSaved ? ' #4f46e5' : '#64748b'}>
                    {isSaved ? 'Saved' : 'Save'}
                  </ButtonText>
                </EventButton>
              </LikesAndSaveContainer>
            </VideoItemDescriptionContainer>

            <Divider />
            <CommentContainer>
              <CommentProfileImg src={profileImageUrl} />
              <CommentDetailsContainer>
                <div>
                  <CommentChannelName isDarkTheme={isDarkTheme}>
                    {name}
                  </CommentChannelName>
                  <SubscriberCount>
                    {subscriberCount} subscribers
                  </SubscriberCount>
                </div>
                <Comment isDarkTheme={isDarkTheme}>{description}</Comment>
              </CommentDetailsContainer>
            </CommentContainer>
          </VideoContentContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default PlayVideoView
