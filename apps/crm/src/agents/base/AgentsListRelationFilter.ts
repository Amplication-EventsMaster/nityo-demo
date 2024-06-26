/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgentsWhereInput } from "./AgentsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AgentsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AgentsWhereInput,
  })
  @ValidateNested()
  @Type(() => AgentsWhereInput)
  @IsOptional()
  @Field(() => AgentsWhereInput, {
    nullable: true,
  })
  every?: AgentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgentsWhereInput,
  })
  @ValidateNested()
  @Type(() => AgentsWhereInput)
  @IsOptional()
  @Field(() => AgentsWhereInput, {
    nullable: true,
  })
  some?: AgentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgentsWhereInput,
  })
  @ValidateNested()
  @Type(() => AgentsWhereInput)
  @IsOptional()
  @Field(() => AgentsWhereInput, {
    nullable: true,
  })
  none?: AgentsWhereInput;
}
export { AgentsListRelationFilter as AgentsListRelationFilter };
