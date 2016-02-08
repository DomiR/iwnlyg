import Approval from '../views/Approval'
import Intro from '../views/Intro'
import Outro from '../views/Outro'
import Playback from '../views/Playback'
import UnsupportedError from '../views/UnsupportedError'
import WebcamInitialisation from '../views/WebcamInitialisation'
import WebcamError from '../views/WebcamError'

export default {
  VIEW_INTRO: Intro,
  VIEW_UNSUPPORTED_ERROR: UnsupportedError,
  VIEW_WEBCAM_PROMPT: WebcamInitialisation,
  VIEW_WEBCAM_ERROR: WebcamError,
  VIEW_VIDEO: Playback,
  VIEW_OUTRO: Outro,
  VIEW_APPROVAL: Approval,
  ACTION_START: "ACTION_START",
  ACTION_PROMPT_WEBCAM: "ACTION_PROMPT_WEBCAM",
  ACTION_INITIATE_WEBCAM: "ACTION_INITIATE_WEBCAM",
  ACTION_INITIATE_WEBCAM_SUCCESS: "ACTION_INITIATE_WEBCAM_SUCCESS",
  ACTION_INITIATE_WEBCAM_FAILURE: "ACTION_INITIATE_WEBCAM_FAILURE",
  ACTION_INITIATE_UNSUPPORTED: "ACTION_INITIATE_UNSUPPORTED",
  ACTION_BUFFERING_VIDEO: "ACTION_BUFFERING_VIDEO",
  ACTION_SELECTED_FIRST_FRAME: "ACTION_SELECTED_FIRST_FRAME",
  ACTION_SELECTED_SECOND_FRAME: "ACTION_SELECTED_SECOND_FRAME",
  ACTION_SELECTED_WEBCAM_FRAME: "ACTION_SELECTED_WEBCAM_FRAME",
  ACTION_SELECTED_RESET: "ACTION_SELECTED_RESET",
  ACTION_CAN_PLAY_THROUGH: "ACTION_CAN_PLAY_THROUGH",
  ACTION_END: "ACTION_END",
  ACTION_IMAGE_CAPTURED: "ACTION_IMAGE_CAPTURED",
  ACTION_APPROVED: "ACTION_APPROVED",
  ACTION_UPLOAD_IMAGE: "ACTION_UPLOAD_IMAGE",
  ACTION_LOADED_IMAGES: "ACTION_LOADED_IMAGES",
  ACTION_SINGLE_TRACK: "ACTION_SINGLE_TRACK",
  VIDEO_LOOP: "VIDEO_LOOP",
  VIDEO_MAIN: "VIDEO_MAIN",
  TIMELINE_FIRST_VIDEO: "x",
  TIMELINE_SECOND_VIDEO: "y",
  TIMELINE_WEBCAM: "w",
  TIMELINE_GHOST: "g",
  TIMELINE_RESET: "v"
}
