import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateManyWithoutGenresInput } from "../inputs/BookUpdateManyWithoutGenresInput";
import { MovieUpdateManyWithoutGenresInput } from "../inputs/MovieUpdateManyWithoutGenresInput";
import { ShowUpdateManyWithoutGenresInput } from "../inputs/ShowUpdateManyWithoutGenresInput";
import { SongUpdateManyWithoutGenresInput } from "../inputs/SongUpdateManyWithoutGenresInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GenreUpdateInput", {
  isAbstract: true
})
export class GenreUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateManyWithoutGenresInput, {
    nullable: true
  })
  movies?: MovieUpdateManyWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateManyWithoutGenresInput, {
    nullable: true
  })
  shows?: ShowUpdateManyWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateManyWithoutGenresInput, {
    nullable: true
  })
  songs?: SongUpdateManyWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateManyWithoutGenresInput, {
    nullable: true
  })
  books?: BookUpdateManyWithoutGenresInput | undefined;
}
