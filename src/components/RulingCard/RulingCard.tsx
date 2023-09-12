import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IRuling, IRulingCard } from "@/types/rulings";
import Image from "next/image";
import { OPTIONS, OPERATION } from "@/types/inputs";

const RulingCard: React.FC<IRulingCard> = ({ruling,view, saveVote}) => {
  const router = useRouter();
  const [wasVoted, setWasVoted] = useState<boolean>(false);
  const [operation, setOperation] = useState<OPERATION>(OPERATION.NULL);
  const [container, setContainer] = useState<string>("container-list");
  const [image, setImage] = useState<string>("image-list");
  const [opacity, setOpacity] = useState<string>("opacity-list");
  const [section, setSection] = useState<string>("section-list");
  const [content, setContent] = useState<string>("content-list");
  const [cardButtons, setCardButtons] = useState<string>("card-buttons-list");
  const [cardImage, setCardImage] = useState<string>("card-image-list");
  const [voteIcon, setVoteIcon] = useState<string>("vote-icon-list");
  const [voteNow, setVoteNow] = useState<string>("vote-now-list");
  const [ellipsis, setEllipsis] = useState<string>("ellipsis-list");
  const [voteContainer, setVoteContainer] = useState<string>("vote-container-list");

  useEffect(() => {
    if (view === OPTIONS.GRID) {
      setContainer("container-grid");
      setImage("image-grid");
      setOpacity("opacity-grid");
      setSection("section-grid");
      setContent("content-grid");
      setCardButtons("card-buttons-grid");
      setCardImage("card-image-grid");
      setVoteIcon("vote-icon-grid");
      setVoteNow("vote-now-grid");
      setEllipsis("ellipsis-grid");
      setVoteContainer("vote-container-grid");
    } else {
      setContainer("container-list");
      setImage("image-list");
      setOpacity("opacity-list");
      setSection("section-list");
      setContent("content-list");
      setCardButtons("card-buttons-list");
      setCardImage("card-image-list");
      setVoteIcon("vote-icon-list");
      setVoteNow("vote-now-list");
      setEllipsis("ellipsis-list");
      setVoteContainer("vote-container-list");
    }
  }, [view]);

  const goToRuling = (id: string) => router.push(`/ruling/${id}`);

  const processVote = () => {
    if(wasVoted) {
      setWasVoted(false)
    } else {
      saveVote(operation)
      setOperation(OPERATION.NULL)
      setWasVoted(true)
    }
  }

  return (
    <div className={container}>
      <Image
        sizes="(min-width: 750px) 1440px, 100vw"
        src="/pope-francis.png"
        className={image}
        alt="test"
        width={0}
        height={0}
      />
      <div className={`${section} z-20 w-full absolute h-28 items-center`}>
        <div className={content}>
          <div
            className={`${
              view === OPTIONS.LIST ? "text-3xl" : "text-xl"
            } mb-2 cursor-pointer`}
            onClick={() => goToRuling("1")}
          >
            {!wasVoted ? ruling.name: 'Thank you for your vote!'}
          </div>
          {!wasVoted && <p className={ellipsis}>{ruling.description}</p>}
        </div>
        <div className={`${voteContainer} pr-6`}>
          <div className="text-end text-white mb-2">1 month ago</div>
          <div className="flex justify-end">
            <button
              className={`icon-button !p-2 mr-4 ${operation === OPERATION.ADD? "!border !border-white !border-solid": ""}`}
              aria-label="thumbs up"
              onClick={() => setOperation(OPERATION.ADD)}
              disabled={wasVoted}
            >
              <Image
                src="/thumbs-up.svg"
                alt="thumbs up"
                width={"0"}
                height={"0"}
                className={voteIcon}
              />
            </button>
            <button
              className={`icon-button !p-2 mr-4 ${operation === OPERATION.SUBS? "!border !border-white !border-solid": ""}`}
              aria-label="thumbs down"
              onClick={() => setOperation(OPERATION.SUBS)}
              disabled={wasVoted}
            >
              <Image
                src="/thumbs-down.svg"
                alt="thumbs down"
                width={"0"}
                height={"0"}
                className={voteIcon}
              />
            </button>
            <button
              className={`${voteNow} ${!operation  && !wasVoted? "opacity-60 !cursor-auto" : ""}`}
              aria-label="thumbs up"
              onClick={() => processVote()}
              disabled={!operation && !wasVoted}>
              {!wasVoted ? 'Vote Now' : 'Vote Again'}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${opacity} bg-gradient-to-r from-neutral-600 from-1% via-neutral-800 via-50% to-neutral-600 to-99% relative z-10 opacity-60`}
      ></div>
      <div className={`${cardButtons}`}>
        <div className="!ml-0 !mr-0 featured-card__buttons">
          <div className="icon-button items-center !opacity-100" aria-label="thumbs up">
            <Image
              src="/thumbs-up.svg"
              alt="thumbs up"
              width={"0"}
              height={"0"}
              className={`${cardImage}`}
            />
            <div className="ml-1">{ruling.percent?.positive}%</div>
          </div>
          <div className="icon-button items-center" aria-label="thumbs down">
            <Image
              src="/thumbs-down.svg"
              alt="thumbs down"
              width={"0"}
              height={"0"}
              className={`${cardImage}`}
            />
            <div className="ml-1">{ruling.percent?.negative}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RulingCard;
