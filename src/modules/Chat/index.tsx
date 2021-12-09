import React from "react";
import { FlatList } from "react-native";
import { Header } from "../../components/Header";
import { InfoCard } from "../../components/InfoCard";

const data = [
  {
    picture: "https://avatars.githubusercontent.com/u/92890340?v=4",
    contact: "Ronald Silva",
    writeText: "You: Hello, Ronald!",
    writedTextDay: "Yesterday",
    id: 1,
  },
  {
    picture:
      "http://files.sunoresearch.com.br/n/uploads/2021/08/c9d2f6bc-david-velez-1-1024x683-1.jpg",
    contact: "David Velez",
    writeText: "David: What?",
    writedTextDay: "Yesterday",
    id: 2344,
  },

  {
    picture:
      "https://jpimg.com.br/uploads/2021/12/design-sem-nome-2021-12-09t111153.733.jpg",
    contact: "Whindersson Nunes",
    writeText: "You: Hahahaha!",
    writedTextDay: "Yesterday",
    id: 455,
  },
  {
    picture:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSVVyE9C3wjVRHtaS9IHCiCJpqSEraahwjlDyt-KgxSh5xEdsVQXUUE7B8vpRQ-",
    contact: "Elon Musk",
    writeText: "Elon: ?",
    writedTextDay: "01/12/2021",
    id: 2345,
  },
  {
    picture:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT12cP23udqvCqHW_2oAvK257g3oVQkv23tOumxtpfFOhHi8a5B",
    contact: "Bill Gates",
    writeText: "You: Very Good!",
    writedTextDay: "Yesterday",
    id: 2311,
  },
  {
    picture:
      "https://www.suno.com.br/wp-content/uploads/2018/12/steve-jobs.jpg",
    contact: "Steve Jobs",
    writeText: "You: miss you",
    writedTextDay: "years ago",
    id: 23456,
  },
  {
    picture: "",
    contact: "Microsoft Teams",
    writeText: "Microsoft: Welcome Microsoft Teams",
    writedTextDay: "years ago",
    id: 234456,
  },
  {
    picture:
      "https://jpimg.com.br/uploads/2021/12/design-sem-nome-2021-12-09t111153.733.jpg",
    contact: "Whindersson Nunes",
    writeText: "You: Hahahaha!",
    writedTextDay: "Yesterday",
    id: 23466,
  },
  {
    picture:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSVVyE9C3wjVRHtaS9IHCiCJpqSEraahwjlDyt-KgxSh5xEdsVQXUUE7B8vpRQ-",
    contact: "Elon Musk",
    writeText: "Elon: ?",
    writedTextDay: "01/12/2021",
    id: 2316,
  },
  {
    picture:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT12cP23udqvCqHW_2oAvK257g3oVQkv23tOumxtpfFOhHi8a5B",
    contact: "Bill Gates",
    writeText: "You: Very Good!",
    writedTextDay: "Yesterday",
    id: 2676,
  },
  {
    picture:
      "https://www.suno.com.br/wp-content/uploads/2018/12/steve-jobs.jpg",
    contact: "Steve Jobs",
    writeText: "You: miss you",
    writedTextDay: "years ago",
    id: 7652,
  },
];
interface InfoCardProps {
  contact?: string;
  writeText?: string;
  writedTextDay?: string;
  picture?: string;
  id?: number;
}

export const Chat = () => {
  const renderItem = ({ item, index }: { item: InfoCardProps }) => {
    return (
      <InfoCard
        contact={item.contact}
        writeText={item.writeText}
        writedTextDay={item.writedTextDay}
        picture={item.picture}
        key={item.id}
        index={index}
      />
    );
  };
  return (
    <>
      <Header />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </>
  );
};
